import React from 'react'
import placeholderImg from '../assets/placeholder.svg'

// Tipo do restaurante
interface Restaurant {
  id: number
  name: string
  cuisine: string
  rating: number
  reviews: number
  priceRange: string
  address: string
  image: string
}

// Mock de restaurantes (imagens livres do Unsplash)
const RESTAURANTS: Restaurant[] = [
  {
    id: 1,
    name: 'Verde & Sabor',
    cuisine: 'Saudável, Saladas, Bowls',
    rating: 4.7,
    reviews: 842,
    priceRange: '$$'
    ,address: 'Av. Paulista, 1000 - São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Casa do Grelhado',
    cuisine: 'Brasileira, Grelhados',
    rating: 4.6,
    reviews: 1291,
    priceRange: '$$'
    ,address: 'R. dos Pinheiros, 500 - São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sabor do Oriente',
    cuisine: 'Asiática, Fusion',
    rating: 4.8,
    reviews: 612,
    priceRange: '$$$'
    ,address: 'R. Augusta, 2500 - São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Bowl & Co.',
    cuisine: 'Bowls, Vegano, Natural',
    rating: 4.5,
    reviews: 473,
    priceRange: '$$'
    ,address: 'Av. Faria Lima, 4000 - São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Trattoria da Serra',
    cuisine: 'Italiana',
    rating: 4.6,
    reviews: 911,
    priceRange: '$$'
    ,address: 'R. Harmonia, 170 - São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1546549039-49dcd4f7aa4a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Poke Natural',
    cuisine: 'Havaiana, Poke',
    rating: 4.7,
    reviews: 358,
    priceRange: '$$'
    ,address: 'R. Fradique Coutinho, 800 - São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Grão & Gengibre',
    cuisine: 'Veggie, Integral, Sopas',
    rating: 4.4,
    reviews: 227,
    priceRange: '$$'
    ,address: 'Av. Ibirapuera, 3100 - São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1604908554007-8338d8b3b81f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'Mar & Brasa',
    cuisine: 'Frutos do Mar, Grelhados',
    rating: 4.5,
    reviews: 504,
    priceRange: '$$$'
    ,address: 'Av. Pacaembu, 1200 - São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1544025162-705f6e4d23ae?q=80&w=1200&auto=format&fit=crop'
  }
]

const Restaurantes: React.FC = () => {
  const toMapsUrl = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <main className="container">
      <h1 className="titulo">Restaurantes</h1>
      <p className="subtitulo">Descubra lugares bem avaliados e abra o mapa para chegar até eles</p>

      <section className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
        {RESTAURANTS.map(r => (
          <article key={r.id} className="card" role="article" aria-label={r.name} style={{ display: 'flex', flexDirection: 'column', minHeight: 420 }}>
            <img 
              src={r.image} 
              alt={r.name} 
              style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12 }}
              onError={(e) => { e.currentTarget.src = placeholderImg }}
            />
            <h3 style={{ margin: '0.5rem 0', color: 'var(--accent-lilac)' }}>{r.name}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{r.cuisine} • {r.priceRange}</p>
            <p style={{ marginTop: '0.25rem' }}>⭐ {r.rating.toFixed(1)} ({r.reviews} avaliações)</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{r.address}</p>
            <a
              className="ver-receita"
              style={{ marginTop: 'auto' }}
              href={toMapsUrl(r.address)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${r.name} no mapa`}
            >
              Ver no mapa
            </a>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Restaurantes
