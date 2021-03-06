module.exports = {
    'secret': 'a677338a7b0e1e214c76f846daa4bab2875250ff',
    'database': 'mongodb://localhost:27017/qx',
    'sessionTimelife': 30 * 60 * 1000,
    messages: {
        general:{
            error_500: 'Disculpenos, ha ocurrido  un error interno, por favor intenta nuevamente en unos momentos.'
        }
        , auth: {
            authenticationFailed: 'Con los datos proporcionados no ha sido posible identificarte, por favor verifica e intenta de nuevo.',
            authenticationIncomplete: 'Disculpenos, no ha sido posible finalizar el proceso de identificación, por favor intente nuevamente en unos momentos.',
            nonExistentToken: 'El token proporcionado no existe, por favor verifique e intente nuevamente.',
            expiredToken: 'La sessión ha expirado, por favor ingrese nuevamente a la aplicación.',
            endedTokenSucessfully:'La sessión ha sido terminada exitosamente'
        }
        , user: {
            addedSuccessfully: 'La información ha sido guardado exitosamente.',
            updatedSuccessfully: 'La información ha sido actualizada exitosamente.',
            notSaved: 'No se ha podido completar la operación por problemas con la información, por favor verifica e intenta nuevamente.',
            deletedSuccessfully: 'La información ha sido eliminada exitosamente.',
            paramUserInvalid: 'El parámetro :user es inválido.',
            nonExistentUser: 'El usuario solicitado no existe.',
            usernameExists: 'Ya existe un usuario con el nombre de usuario proporcionado y no puede duplicarse.',
        }
        , profile: {
            addedSuccessfully: 'La información ha sido guardado exitosamente.',
            updatedSuccessfully: 'La información ha sido actualizada exitosamente.',
            deletedSuccessfully: 'La información ha sido eliminada exitosamente.',
            paramProfileInvalid: 'El parámetro :profile es inválido.',
            nonExistentProfile: 'El perfil solicitado no existe.'
        }
    }
}
