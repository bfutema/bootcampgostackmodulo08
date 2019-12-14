import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTech] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      setTech(JSON.parse(storageTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>
        Você tem {techSize}
        {techs.length > 1 ? ' tecnologias' : ' tecnologia'}
      </strong>
      <br />
      <input onChange={e => setNewTech(e.target.value)} value={newTech} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
