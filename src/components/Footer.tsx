import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Grill & Burgers</h3>
            <p>123 Rue de la Viande<br />75000 Paris, France</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Heures d&apos;ouverture</h3>
            <p>Lun - Dim: 11h30 - 23h00</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contact</h3>
            <p>Téléphone: +33 1 23 45 67 89<br />Email: info@grillandburgers.com</p>
          </div>
        </div>
        <Separator className="my-8 bg-border" />
        <p className="text-center text-sm">© {new Date().getFullYear()} Grill & Burgers. Tous droits réservés.</p>
      </div>
    </footer>
  )
}