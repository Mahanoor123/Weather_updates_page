
// Prompt user to input the weather condition
const userWeatherInput = prompt("Enter the current weather:\n sunny, \n rainy, \n windy, \n snowy:").toLowerCase();

// Define weather scenarios with if-else statement
if (userWeatherInput === 'sunny') {
    document.write(`
            <h1 class="head">Weather Conditions Update</h1>
        <section id="weather_container">
            <div class="socials">
                <a href="https://www.facebook.com/"><img src="./Images/icon1.png" width="30px"></a><a href="https://www.instagram.com/"><img src="./Images/icon2.png" width="30px"></a><a href="https://www.whatsapp.com/"><img src="./Images/icon3.png" width="30px"></a><a href="https://www.twitter.com/"><img src="./Images/icon4.png" width="30px"></a>
            </div>
            <div class="weather_card">
            <div class="weather_img"><img src="./Images/sunny.png"  width="400px"></div>
            <div class="weather_details">
                <h2>Sunny</h2>
                <small>Sunny due to humidity</small>
                <h1>35 °C</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex temporibus animi fugit eligendi in! Deserunt officiis dicta ad sapiente earum corporis fugiat suscipit vel. Reiciendis id ducimus nesciunt nulla beatae, laudantium velit sequi numquam maiores totam consectetur, enim rerum libero!</p>
                <h5>Next days weather:</h5>
                <ul>
                <li><img src="./Images/sunny1.png" width="100px"></li>
                <li><img src="./Images/sunny2.png"  width="100px"></li>
                <li><img src="./Images/sunny3.png"  width="100px"></li>
                <li><img src="./Images/sunny4.png"  width="100px"></li>   
                </ul>
            </div>
            </div>
        </section>
            `)
} else if (userWeatherInput === 'rainy') {
    document.write(`
        <h1 class="head">Weather Conditions Update</h1>
    <section id="weather_container">
        <div class="socials">
            <a href="https://www.facebook.com/"><img src="./Images/icon1.png" width="30px"></a><a href="https://www.instagram.com/"><img src="./Images/icon2.png" width="30px"></a><a href="https://www.whatsapp.com/"><img src="./Images/icon3.png" width="30px"></a><a href="https://www.twitter.com/"><img src="./Images/icon4.png" width="30px"></a>
        </div>
        <div class="weather_card">
        <div class="weather_img"><img src="./Images/rainy4.png" width="400px"></div>
        <div class="weather_details">
            <h2>Rainy</h2>
            <small>Rainy due to humidity</small>
            <h1>29 °C</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex temporibus animi fugit eligendi in! Deserunt officiis dicta ad sapiente earum corporis fugiat suscipit vel. Reiciendis id ducimus nesciunt nulla beatae, laudantium velit sequi numquam maiores totam consectetur, enim rerum libero!</p>
            <h5>Next days weather:</h5>
            <ul>
            <li><img src="./Images/rainy1.png" width="100px"></li>
            <li><img src="./Images/rainy2.png"  width="100px"></li>
            <li><img src="./Images/rainy.png"  width="100px"></li>
            <li><img src="./Images/rainy3.png"  width="100px"></li>  
            </ul> 
        </div>
        </div>
    </section>
        `)
} else if (userWeatherInput === 'windy') {
    document.write(`
        <h1 class="head">Weather Conditions Update</h1>
    <section id="weather_container">
        <div class="socials">
            <a href="https://www.facebook.com/"><img src="./Images/icon1.png" width="30px"></a><a href="https://www.instagram.com/"><img src="./Images/icon2.png" width="30px"></a><a href="https://www.whatsapp.com/"><img src="./Images/icon3.png" width="30px"></a><a href="https://www.twitter.com/"><img src="./Images/icon4.png" width="30px"></a>
        </div>
        <div class="weather_card">
        <div class="weather_img"><img src="./Images/windy.png" width="400px"></div>
        <div class="weather_details">
            <h2>Windy</h2>
            <small>Windy due to winds</small>
            <h1>19 °C</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex temporibus animi fugit eligendi in! Deserunt officiis dicta ad sapiente earum corporis fugiat suscipit vel. Reiciendis id ducimus nesciunt nulla beatae, laudantium velit sequi numquam maiores totam consectetur, enim rerum libero!</p>
            <h5>Next days weather:</h5>
            <ul>
            <li><img src="./Images/windy1.png" width="100px"></li>
            <li><img src="./Images/windy2.png" width="100px"></li>
            <li><img src="./Images/windy3.png" width="100px"></li>
            <li><img src="./Images/windy4.png" width="100px"></li>   
            </ul>
        </div>
        </div>
    </section>
        `)
} else if (userWeatherInput === 'snowy') {
    document.write(`
        <h1 class="head">Weather Conditions Update</h1>
    <section id="weather_container">
        <div class="socials">
            <a href="https://www.facebook.com/"><img src="./Images/icon1.png" width="30px"></a><a href="https://www.instagram.com/"><img src="./Images/icon2.png" width="30px"></a><a href="https://www.whatsapp.com/"><img src="./Images/icon3.png" width="30px"></a><a href="https://www.twitter.com/"><img src="./Images/icon4.png" width="30px"></a>
        </div>
        <div class="weather_card">
        <div class="weather_img"><img src="./Images/snowy3.png" width="400px"></div>
        <div class="weather_details">
            <h2>Snowy</h2>
            <small>Snowy due to snowfall</small>
            <h1>-05 °C</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex temporibus animi fugit eligendi in! Deserunt officiis dicta ad sapiente earum corporis fugiat suscipit vel. Reiciendis id ducimus nesciunt nulla beatae, laudantium velit sequi numquam maiores totam consectetur, enim rerum libero!</p>
            <h5>Next days weather</h5>
            <ul>
            <li><img src="./Images/snowy1.png" width="100px"></li>
            <li><img src="./Images/snowy2.png" width="100px"></li>
            <li><img src="./Images/snowy.png" width="100px"></li>
            <li><img src="./Images/snowy4.png" width="100px"></li>  
            </ul> 
        </div>
        </div>
    </section>
        `)
} else {
    document.write(`
        <div class="else">
        <img src="./Images/heart.png" width="200px">
        <p style="color: white;"> Best wishes for today, enter appropriate weather </p>
       </div>
        `)
}
