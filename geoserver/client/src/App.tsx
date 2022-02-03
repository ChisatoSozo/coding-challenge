import React, { useCallback, useState } from 'react';

function App() {

  const [IP, setIP] = useState("")
  const [error, setError] = useState<string>();
  const [location, setLocation] = useState<string>();

  const handleIPChange = useCallback((e) => {
    setIP(e.target.value)
  }, [])

  const getLocation = useCallback(async () => {
    const result = await fetch("/location?ip=" + IP)
    if (result.status !== 200) {
      setError(result.statusText);
      setLocation(undefined)
      return;
    };
    const location = await result.json();
    setError(undefined)
    setLocation(
      `Lat: ${location.location.latitude} Long: ${location.location.longitude}`
    )

  }, [IP])

  return (
    <div>
      IP: <input onChange={handleIPChange} value={IP} />
      <button onClick={getLocation}>Get Location</button>
      {error && <><span style={{ color: "red" }}>Error: {error}</span></>}
      {location && <span>{location}</span>}
    </div>
  );
}

export default App;
