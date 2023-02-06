export default function(errorCode){
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz Email Adresi";
        
        case "auth/email-already-exists":
            return "Email adresi halihazırda mevcut";
        
        case "auth/user-not-found":
            return "Kullanıcı Bulunamadı";
        
        
        default:
            return errorCode;
    }
}