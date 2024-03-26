// pages/crypto-converter.js
import { useState, useEffect } from 'react';

function CryptoConverter() {
  const [conversionRate, setConversionRate] = useState(null);
  const [euroValue, setEuroValue] = useState('');
  const [ethereumValue, setEthereumValue] = useState('');

  useEffect(() => {
    const fetchConversionRate = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur');
      const data = await response.json();
      setConversionRate(data.ethereum.eur);
    };

    fetchConversionRate();
  }, []);

  const handleEuroChange = (e) => {
    setEuroValue(e.target.value);
    setEthereumValue(e.target.value / conversionRate);
  };

  const handleEthereumChange = (e) => {
    setEthereumValue(e.target.value);
    setEuroValue(e.target.value * conversionRate);
  };

  return (
    <div>
      {/* Header Section */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <img src="/path-to-your-logo/logo.png" alt="Logo" style={{ height: '50px' }} />
        <button onClick={() => alert('Implement logout functionality here.')}>Logout</button>
      </header>

      {/* Main Content */}
      <main style={{ padding: '1rem' }}>
        <h1>Ethereum to Euro Conversion</h1>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <input id="euroInput" type="number" value={euroValue} onChange={handleEuroChange} style={{ marginRight: '0.5rem' }} />
          <label htmlFor="euroInput">Euro:</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input id="ethereumInput" type="number" value={ethereumValue} onChange={handleEthereumChange} style={{ marginRight: '0.5rem' }} />
          <label htmlFor="ethereumInput">Ethereum:</label>
        </div>
      </main>
    </div>
  );
}

export default CryptoConverter;
