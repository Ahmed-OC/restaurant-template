import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header animatedScroll={false} />
      <main className="flex-grow container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Mentions Légales
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            1. Informations légales
          </h2>
          <p className="mb-2">Raison sociale : Grill & Burgers</p>
          <p className="mb-2">Forme juridique : SARL</p>
          <p className="mb-2">Capital social : 10 000 €</p>
          <p className="mb-2">
            Siège social : 123 Rue de la Viande, 75000 Paris, France
          </p>
          <p className="mb-2">SIRET : 123 456 789 00001</p>
          <p className="mb-2">
            Numéro de TVA intracommunautaire : FR 12 345678901
          </p>
        </section>

        <Separator className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            2. Coordonnées
          </h2>
          <p className="mb-2">Téléphone : +33 1 23 45 67 89</p>
          <p className="mb-2">Email : contact@grillandburgers.com</p>
        </section>

        <Separator className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            3. Directeur de la publication
          </h2>
          <p className="mb-2">
            Nom du directeur de la publication : Jean Dupont
          </p>
        </section>

        <Separator className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            4. Hébergeur du site
          </h2>
          <p className="mb-2">Nom de l&apos;hébergeur : OVH SAS</p>
          <p className="mb-2">
            Adresse : 2 rue Kellermann - 59100 Roubaix - France
          </p>
        </section>

        <Separator className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            5. Propriété intellectuelle
          </h2>
          <p className="mb-4">
            L&apos;ensemble de ce site relève de la législation française et
            internationale sur le droit d&apos;auteur et la propriété
            intellectuelle. Tous les droits de reproduction sont réservés, y
            compris pour les documents téléchargeables et les représentations
            iconographiques et photographiques.
          </p>
        </section>

        <Separator className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            6. Protection des données personnelles
          </h2>
          <p className="mb-4">
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978
            modifiée et au Règlement Général sur la Protection des Données
            (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification
            et de suppression des données vous concernant. Vous pouvez exercer
            ce droit en nous contactant à l&apos;adresse email :
            privacy@grillandburgers.com.
          </p>
        </section>

        <Separator className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            7. Conception et réalisation du site
          </h2>
          <p className="mb-4">
            Ce site a été conçu et réalisé par l&apos;entreprise DATAJ.
          </p>
          <p className="mb-2">DATAJ</p>
          <p className="mb-2">
            Adresse : 456 Avenue du Développement, 75001 Paris, France
          </p>
          <p className="mb-2">Site web : www.dataj.com</p>
          <p className="mb-2">Email : contact@dataj.com</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
