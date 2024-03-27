import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Connectez vous à votre compte</h1>
        
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold">Mot de passe</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
          
          <Link href="/user">
             Se connecter
          </Link>
          
          </button>
        <p className="mt-4">Vous n'avez pas de compte ? <Link href="/register" className="text-blue-500">Inscrivez-vous</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
