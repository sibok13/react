import { useEffect, useState } from "react";

export default function Cats() {

    const[dataApi, setDataApi] = useState([]);

    function getData() {
        fetch('https://nekos.best/api/v2/neko')
        .then((resp) => resp.json())
        .then((data) => setDataApi(data.results[0]))
        .catch((error) => setDataApi({"error": error.toString()}))
    }

    useEffect(() => {
        getData()
    },[])

    if(dataApi.error) {
        return (
            <div>
                Произошла ошибка! {dataApi.error}
                <br/>
                <button onClick={() => getData()}>Перезагрузить данные</button>
            </div>
        )
    }
  
  return (
    <div>
        <h4>Котики</h4>
        <img height="400px" src={dataApi.url} alt="" />
        
        <button onClick={() => getData()}>Следующая картинка</button>
    </div>
  );
  }