// Intervalle entre 2 notifications (secondes)
const NOTIFICATION_INTERVAL = 900

// Durée d'affichage de la notification (secondes)
const NOTIFICATION_DURATION = 10

// On récupère la <div> qui contient l'URL du blog
const divNotificationBlog = document.getElementById("notification-blog");

// Fonction qui affiche la notification
function showNotification() {
    // On ajoute la classe "visible" à la <div>
    divNotificationBlog.classList.add("visible");
    // On définit un timer pour appeler la fonction qui masquera la notification
    setTimeout(hideNotification, NOTIFICATION_DURATION * 1000);
}

// Fonction qui masque la notification
function hideNotification() {
    // On supprime la classe "visible" à la <div> ce qui la remettra à son état
    // initial
    divNotificationBlog.classList.remove("visible");
    // On définit un timer pour appeler la fonction qui affichera à nouveau la
    // notification
    setTimeout(showNotification, NOTIFICATION_INTERVAL * 1000);
}

// On fait un premier appel à showNotification() pour lancer la machine :p
showNotification();