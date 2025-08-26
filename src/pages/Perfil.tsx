import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePerfil } from '../contexts/PerfilContext'
import { useFavoritos } from '../contexts/FavoritosContext'
import { MOCK_RECIPES } from '../data/recipes'

const Perfil: React.FC = () => {
  const navigate = useNavigate()
  const { perfil, updatePerfil } = usePerfil()
  const { favoritos, toggleFavorito } = useFavoritos()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(perfil)
  const [activeTab, setActiveTab] = useState<'info' | 'favoritos'>('info')

  const receitasFavoritas = MOCK_RECIPES.filter(receita => favoritos.has(receita.id))

  const handleSave = () => {
    updatePerfil(formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData(perfil)
    setIsEditing(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setFormData(prev => ({ ...prev, foto: result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const tagClass = (cat: string) => (
    cat === 'Sobremesas Saudáveis' ? 'rosa' :
    cat === 'Café da Manhã' ? 'verde' :
    cat === 'Marmitas Fit' ? 'lilas' :
    cat === 'Veganas' ? 'lavanda' :
    cat === 'Detox' ? 'verde' :
    cat === 'Low Carb' ? 'lilas' : 'roxo'
  )

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <div className="perfil-foto-section">
          <div className="perfil-foto">
            {formData.foto ? (
              <img src={formData.foto} alt="Foto do perfil" />
            ) : (
              <div className="foto-placeholder">
                <span>👤</span>
              </div>
            )}
            {isEditing && (
              <label className="upload-foto">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
                <span className="upload-icon">📷</span>
              </label>
            )}
          </div>
        </div>
        
        <div className="perfil-info-header">
          <h1>{perfil.nome}</h1>
          <p className="perfil-bio">{perfil.bio}</p>
          <div className="perfil-stats">
            <div className="stat">
              <span className="stat-number">{receitasFavoritas.length}</span>
              <span className="stat-label">Favoritas</span>
            </div>
            <div className="stat">
              <span className="stat-number">12</span>
              <span className="stat-label">Receitas</span>
            </div>
            <div className="stat">
              <span className="stat-number">45</span>
              <span className="stat-label">Seguidores</span>
            </div>
          </div>
        </div>

        <div className="perfil-actions">
          {!isEditing ? (
            <button 
              className="btn-editar"
              onClick={() => setIsEditing(true)}
            >
              ✏️ Editar Perfil
            </button>
          ) : (
            <div className="edit-actions">
              <button className="btn-salvar" onClick={handleSave}>
                ✅ Salvar
              </button>
              <button className="btn-cancelar" onClick={handleCancel}>
                ❌ Cancelar
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="perfil-tabs">
        <button 
          className={`tab ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          📋 Informações
        </button>
        <button 
          className={`tab ${activeTab === 'favoritos' ? 'active' : ''}`}
          onClick={() => setActiveTab('favoritos')}
        >
          ❤️ Favoritas ({receitasFavoritas.length})
        </button>
      </div>

      <div className="perfil-content">
        {activeTab === 'info' && (
          <div className="perfil-info">
            <div className="info-grid">
              <div className="info-group">
                <label>Nome Completo</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                  />
                ) : (
                  <span>{perfil.nome}</span>
                )}
              </div>

              <div className="info-group">
                <label>Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                ) : (
                  <span>{perfil.email}</span>
                )}
              </div>

              <div className="info-group">
                <label>Telefone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                  />
                ) : (
                  <span>{perfil.telefone}</span>
                )}
              </div>

              <div className="info-group">
                <label>Data de Nascimento</label>
                {isEditing ? (
                  <input
                    type="date"
                    value={formData.dataNascimento}
                    onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
                  />
                ) : (
                  <span>{perfil.dataNascimento ? new Date(perfil.dataNascimento).toLocaleDateString('pt-BR') : '-'}</span>
                )}
              </div>

              <div className="info-group">
                <label>Gênero</label>
                {isEditing ? (
                  <select
                    value={formData.genero}
                    onChange={(e) => handleInputChange('genero', e.target.value)}
                  >
                    <option value="feminino">Feminino</option>
                    <option value="masculino">Masculino</option>
                    <option value="outro">Outro</option>
                    <option value="nao-informar">Prefiro não informar</option>
                  </select>
                ) : (
                  <span>{perfil.genero === 'feminino' ? 'Feminino' : 
                         perfil.genero === 'masculino' ? 'Masculino' : 
                         perfil.genero === 'outro' ? 'Outro' : 'Não informado'}</span>
                )}
              </div>

              <div className="info-group">
                <label>Cidade</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.cidade}
                    onChange={(e) => handleInputChange('cidade', e.target.value)}
                  />
                ) : (
                  <span>{perfil.cidade}</span>
                )}
              </div>

              <div className="info-group full-width">
                <label>Biografia</label>
                {isEditing ? (
                  <textarea
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows={3}
                  />
                ) : (
                  <span>{perfil.bio}</span>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'favoritos' && (
          <div className="favoritos-section">
            {receitasFavoritas.length === 0 ? (
              <div className="empty-state">
                <span className="empty-icon">💔</span>
                <h3>Nenhuma receita favoritada ainda</h3>
                <p>Explore nossas receitas e favorite suas preferidas!</p>
                <button 
                  className="btn-explorar"
                  onClick={() => navigate('/receitas')}
                >
                  🔍 Explorar Receitas
                </button>
              </div>
            ) : (
              <div className="favoritos-grid">
                {receitasFavoritas.map(receita => (
                  <article key={receita.id} className="card-receita-favorita">
                    <div className="imagem-receita">
                      <img src={receita.image} alt={receita.title} />
                    </div>
                    <span className={`tag ${tagClass(receita.category)}`}>
                      {receita.category}
                    </span>
                    <h3>{receita.title}</h3>
                    <div className="info-receita">
                      <span>🕒 {receita.time}</span>
                      <span>⚙ {receita.difficulty}</span>
                      <span>❤ {receita.likes}</span>
                    </div>
                    <div className="receita-actions">
                      <button 
                        className="btn-ver"
                        onClick={() => navigate('/receitas')}
                      >
                        Ver Receita
                      </button>
                      <button 
                        className="btn-desfavoritar"
                        onClick={() => toggleFavorito(receita.id)}
                        title="Remover dos favoritos"
                      >
                        💔
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Perfil