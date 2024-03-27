import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre plateforme de suivi de portefeuille crypto</h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis odio at erat fermentum, sit amet consequat ipsum molestie.
          Maecenas ac ex ac nisi eleifend venenatis. Duis bibendum magna vel eros bibendum, sed aliquet felis lobortis. Donec blandit
          ligula vel tristique varius. Curabitur malesuada turpis vitae mauris vestibulum, nec hendrerit justo consequat. Sed euismod
          dolor ut nulla ultricies ullamcorper.
        </p>
        <div className="flex justify-center" style={{ padding: '20px' }}>
        <img src="/cover.png" alt="cover Logo" />
        </div>
        <div className="flex justify-center">
          <Link href="/login">
           
              Se connecter
            
          </Link>
        </div>
      </div>
    </main>
  );
}