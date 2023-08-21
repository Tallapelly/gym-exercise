export const exercisesOptions  = {
    method: 'GET',
    //url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1df5b72134msh3c1c6d77c1a6982p187365jsnf5e735c134b5',
      'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
    }
  };;

export const fetchData = async (url, options) => {
  console.log({url});
  console.log(options);
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};