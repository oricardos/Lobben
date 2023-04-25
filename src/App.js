import { useState, useEffect } from "react";
import musics from "./musics.json";

const styles = 
  {
    table: {
      borderColapse: "collapse",
      width: "100%",
    },
    td: {
      border: "1px solid #dddddd",
      textAlign: "left",
      padding: "8px",
    },
    bg: {
        backgroundColor: '#ddd'
    },
    transparent: {
        backgroundColor: 'transparent'
    }
  };

function App() {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    setData(musics);
  }, []);

  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Letra</th>
            <th>Tom</th>
            <th>Cifra</th>
            <th>Bpm</th>
            <th>Video</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const conditionalStyle = item.id %2 === 0 ? styles.bg : styles.transparent;
            const combinedStyle = { ...styles.tr, ...conditionalStyle };

            return (
              <tr key={index} style={combinedStyle}>
                <td>{item.id}</td>

                <td>{item.nome}</td>

                <td>{item.letra}</td>

                <td>{item.tom}</td>

                <td>{item.cifra}</td>

                <td>{item.bpm}</td>

                <td>{item.video}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
