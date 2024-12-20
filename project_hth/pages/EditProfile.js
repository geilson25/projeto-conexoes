function EditProfile({ user, onSave, onCancel }) {
  const [formData, setFormData] = React.useState({
      name: user.name,
      socialName: user.socialName || '',
      pronouns: user.pronouns || '',
      email: user.email,
      password: user.password,
      avatar: user.avatar
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [newAvatar, setNewAvatar] = React.useState(null);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
      try {
          e.preventDefault(); // Previne o comportamento padrão do envio do formulário
          onSave(formData);  // Chama a função onSave passando os dados do formulário
      } catch (error) {
          reportError(error);  // Relata qualquer erro que ocorra
      }
  };

  // Função para lidar com a alteração da imagem do avatar
  const handleAvatarChange = (e) => {
      try {
          const file = e.target.files[0];  // Obtém o primeiro arquivo selecionado
          if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                  setNewAvatar(reader.result);  // Atualiza a visualização do novo avatar
                  setFormData(prev => ({ ...prev, avatar: reader.result }));  // Atualiza os dados do formulário com o novo avatar
              };
              reader.readAsDataURL(file);  // Lê o arquivo como URL de dados
          }
      } catch (error) {
          reportError(error);  // Relata qualquer erro que ocorra
      }
  };

  try {
      return (
          <div className="edit-profile-page" data-name="edit-profile-page">
              <div className="edit-profile-container" data-name="edit-profile-container">
                  <h2 className="text-2xl font-bold mb-6">Editar Perfil</h2>
                  
                  <form onSubmit={handleSubmit} className="edit-profile-form" data-name="edit-profile-form">
                      {/* Upload de avatar */}
                      <div className="avatar-upload" data-name="avatar-upload">
                          <img 
                              src={newAvatar || formData.avatar}  // Exibe o avatar atualizado ou o original
                              alt="Profile"
                              className="preview-avatar"
                          />
                          <label className="avatar-upload-button">
                              <i className="fas fa-camera"></i>  {/* Ícone de câmera */}
                              <input 
                                  type="file" 
                                  accept="image/*"  // Aceita apenas imagens
                                  onChange={handleAvatarChange}  // Função de mudança de avatar
                                  className="hidden"
                              />
                          </label>
                      </div>

                      {/* Campos do formulário */}
                      <div className="form-group">
                          <label>Nome Completo</label>
                          <input
                              type="text"
                              value={formData.name}
                              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                              className="form-input"
                              required
                          />
                      </div>
                      
                      <div className="form-group">
                          <label>Nome Social</label>
                          <input
                              type="text"
                              value={formData.socialName}
                              onChange={e => setFormData(prev => ({ ...prev, socialName: e.target.value }))}
                              className="form-input"
                          />
                      </div>
                      
                      <div className="form-group">
                          <label>Pronomes</label>
                          <input
                              type="text"
                              value={formData.pronouns}
                              onChange={e => setFormData(prev => ({ ...prev, pronouns: e.target.value }))}
                              className="form-input"
                              placeholder="ex: ele/dele, ela/dela"
                          />
                      </div>
                      
                      <div className="form-group">
                          <label>Email</label>
                          <input
                              type="email"
                              value={formData.email}
                              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                              className="form-input"
                              required
                          />
                      </div>

                      {/* Campo de senha */}
                      <div className="form-group">
                          <label>Senha</label>
                          <div className="password-input-container">
                              <input
                                  type={showPassword ? "text" : "password"}
                                  value={formData.password}
                                  onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                  className="form-input"
                                  required
                              />
                              <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}  // Alterna a visibilidade da senha
                                  className="password-toggle"
                              >
                                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                              </button>
                          </div>
                      </div>
                      
                      {/* Botões de ação */}
                      <div className="form-actions">
                          <button type="button" onClick={onCancel} className="cancel-button">
                              Cancelar
                          </button>
                          <button type="submit" className="save-button">
                              Salvar Alterações
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      );
  } catch (error) {
      reportError(error);  // Relata qualquer erro que ocorra
      return null;
  }
}
