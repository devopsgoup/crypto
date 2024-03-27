import React from 'react';
import Link from 'next/link';

const UserPage = () => {
  // Données de l'utilisateur
  const userData = [
    { email: 'utilisateur@example.com', nom: 'M Kevin Akoua', portefeuille: '1234 ETH' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Bonjour  {userData[0].nom} </h1>
      <div className="flex justify-center">
        <div className="w-1/2 mr-4">
          <div className="flex justify-center" style={{ padding: '20px' }}>
            <img src="/profil.png" alt="profil" />
          </div>
        </div>
        <div className="w-1/2">
          <div>
            {/* Affichage des données utilisateur */}
            {userData.map((user, index) => (
              <div key={index}>
                <h2>Email : {user.email}</h2>
                <h2>Nom : {user.nom}</h2>
                <h2>Portefeuille : {user.portefeuille}</h2>
              </div>
              
            ))}
            <div className="mt-4">
                <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">Convertir en Ether</button>
            </div>
          </div>
        </div>
      </div>
      
      <button className="bg-red-500 text-white font-semibold px-4 py-2 mt-8 rounded hover:bg-blue-600">
          
          <Link href="/login">
             Logout
          </Link>
          
          </button>
    </div>
  );
};

export default UserPage;
