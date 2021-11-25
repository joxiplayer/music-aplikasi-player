      var myDate = new Date();
            var hrs = myDate.getHours();
        
            var greet;
        
            if (hrs < 12)
                greet = 'Selamat Pagi';
            else if (hrs >= 12 && hrs <= 14)
                greet = 'Selamat Siang';
            else if (hrs >= 13 && hrs <= 18)
                greet = 'Selamat Sore';
            else if (hrs >= 19 && hrs <= 24)
                greet = 'Selamat Malam';
        
            document.getElementById('welcome').innerHTML =
                '<b>' + greet + '</b> ';

      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyCORThhpBzHN6_4Z1U-4kI__A6xf5fRuzA",
        authDomain: "shopzoid-app.firebaseapp.com",
        databaseURL: "https://shopzoid-app-default-rtdb.firebaseio.com",
        projectId: "shopzoid-app",
        storageBucket: "shopzoid-app.appspot.com",
        messagingSenderId: "124724344551",
        appId: "1:124724344551:web:7be967100ee7a075469442",
        measurementId: "G-XFNSKZGLNM",
      };
      firebase.initializeApp(firebaseConfig);

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          document.getElementById("img").innerHTML = `
                <p><br /> <img src="${user.photoURL}">
            `;
          document.getElementById("username").innerHTML = `
                <p><br /> Your Name : ${user.displayName}
                   <br /> Your Email : ${user.email}
            `;
          document.getElementById("username-link").innerHTML = `${user.uid}
            `;
            const linkUsername = document.getElementById("username-link");
            const link = document.getElementById("link");
            link.href = link.textContent ;

        }   else {
          window.location = "https://joxiplayer.github.io/music-aplikasi-player/login/index.html";
        }
      });

      function logout() {
        firebase
          .auth()
          .signOut()
          .then(function () {
            window.location = "https://joxiplayer.github.io/music-aplikasi-player/login/index.html";
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      showData();