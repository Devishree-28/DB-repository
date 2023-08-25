// DON'T remove the below import
import "./styles.css";
    const allstar = document.querySelectorAll(".star");
        let current_star_level = document.querySelector('.current_rating');

        allstar.forEach((star, i) => {
            star.onclick = function() {
                let current_star_level_value = i + 1;
                //current_star_level.innerText = `${current_star_level_value} of 5`;
                if(current_star_level_value == 1){
                    current_star_level.innerText = "I just hate it";
                }
                else if(current_star_level_value == 2)
                {
                    current_star_level.innerText = "I don't like it";
                }
                else if(current_star_level_value == 3)
                {
                     current_star_level.innerText = "It is awesome";
                }
                else if(current_star_level_value == 4)
                {
                     current_star_level.innerText = "I just like it";
                } else 
                {
                    current_star_level.innerText = "Excellent! We are thrilled to hear you had such a positive experience, Thank you for choosing our platform.";
                }

                allstar.forEach((star, j) => {
                    if( current_star_level_value >= j+1 )
                    {
                        star.innerHTML = '&#9733';
                    }else{
                        star.innerHTML = '&#9734';
                    }
                })
            }
        })
