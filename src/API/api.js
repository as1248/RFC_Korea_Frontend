const BASEURL = '54.180.241.56:80';

export const searchRFC = async(controller,number) => {
  try{
    const response = await fetch(`${BASEURL}/search?no=1945`,{signal:controller.signal});
    console.log(number);
  }catch(error){
    console.log(error);
  }
}