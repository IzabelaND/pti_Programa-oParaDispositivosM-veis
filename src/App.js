import './App.css';
import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEahxVeHGzdFSjglrL6QRY_ng-DUuLtjR-Q&usqp=CAU" title="Beef Burger" calories="70 calories" price="$12.00" />
      <Card img="https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg" title="Pancakes" calories="60 calories" price="$15.00" />
    </div>
  );
}

function Card (props){
  return(
    
    <div className="card">
      <div class="container">
       <ul>
          <h1 className='card__title'>{props.title}</h1>
          <div class="container_calories">
            <img src='https://images.emojiterra.com/google/android-11/512px/1f525.png'alt='' class="calories__image"/>
            <p className='card__calories'>{props.calories}</p>
          </div>
          <p className='card__price'>{props.price}</p>
          <button className="card__btn">Saiba mais</button>
        </ul>
        <img src={props.img} alt='' class="card__image" />
      </div>
    </div>

  )
}

export default App;
