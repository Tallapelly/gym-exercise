import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exercisesOptions,fetchData, youtubeOptions} from '../utls/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'



const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail] = useState({});
  const [exerciseVideos,setExerciseVideos] = useState([]);

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const {id} = useParams();

  useEffect(()=>{
    const fetchExercisesData = async ()=> {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      // const youtubeSearchUrl = 'https://youtube-media-downloader.p.rapidapi.com';
      // const apiKey = '1df5b72134msh3c1c6d77c1a6982p187365jsnf5e735c134b5';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exercisesOptions);
 
      setExerciseDetail(exerciseDetailData);
      // console.log(exerciseDetailData);
      // console.log(youtubeSearchUrl+"/search?query="+exerciseDetailData.name)
      // const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/v2/${exerciseDetailData.name}/exercise`, youtubeOptions);
      // // console.log(exerciseVideosData);
      // setExerciseVideos(exerciseVideosData);
      
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions);
      setEquipmentExercises(equimentExercisesData);
    } 
    fetchExercisesData();
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      {/* <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/> */}
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} 
      equipmentExercises={equipmentExercises}/>
      </Box>
  )
}

export default ExerciseDetail