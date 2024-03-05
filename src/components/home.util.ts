import { ParkList, MuseumList } from '../data'

const museums_and_parks = () => {
    let index = 1;
    let park = 2;
    let museum: number = 1;
    const data: any[] = []
    data.push({...MuseumList[0], type: 'museum'})
    data.push({...MuseumList[1], type: 'museum'})
    data.push({...ParkList[0], type: 'park'})
    data.push({...ParkList[1], type: 'park'})
    data.push({...MuseumList[2], type: 'museum'})
    data.push({...ParkList[2], type: 'park'})
    return data
    console.log(index);
    console.log(ParkList.length <= park);
    while (park <=  ParkList.length || museum <= MuseumList.length) {
        console.log(index);
        console.log(ParkList.length);
        
        if(index%2 === 0 && ParkList.length <= park){
            data.push(ParkList[park-1])
            park = park + 1
        }
        else if(index%2 !== 0 && MuseumList.length <= museum){
            data.push(MuseumList[park-1])
            museum = museum + 1
        }
        else if(MuseumList.length > museum){
            data.push(ParkList[park-1])
            park = park + 1
        }
        else if(ParkList.length > park){
            data.push(MuseumList[park-1])
            museum = museum + 1
        }
        else{
            break
        }

    }
    return data
}

export default  museums_and_parks