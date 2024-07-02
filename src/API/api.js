const BASEURL = 'http://54.180.241.56:80';

async function toJSON(body) {
  const reader = body.getReader(); // `ReadableStreamDefaultReader`
  const decoder = new TextDecoder();
  const chunks = [];

  async function read() {
    const { done, value } = await reader.read();

    // all chunks have been read?
    if (done) {
      return JSON.parse(chunks.join(''));
    }

    const chunk = decoder.decode(value, { stream: true });
    chunks.push(chunk);
    return read(); // read the next chunk
  }

  return read();
}

export const searchRFC = async(controller,number, setHtml, setTranslatedHtml) => {
  try{
    const response = await fetch(`${BASEURL}/search?no=1945`,{signal:controller.signal});
    const data = await toJSON(response.body);
    setHtml(data.original);
    setTranslatedHtml(data.translated);
  }catch(error){
    console.log(error);
  }
}