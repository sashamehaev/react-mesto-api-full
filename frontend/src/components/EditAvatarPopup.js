import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {
  const { isOpen, onClose } = props;
  const [avatar, setAvatar] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatar);
  }

  React.useEffect(() => {
    setAvatar('');
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm onSubmit={handleSubmit} name="avatar" title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="form__field">
        <input 
          value={avatar || ''}
          onChange={(e) => { setAvatar(e.target.value) }} 
          id="avatar-link-input" type="url" name="link" 
          placeholder="Ссылка на картинку" className="form__input form__input_type_link" required />
        <span className="avatar-link-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
