import React, { Component } from 'react';
function Villian(props) {
  return (
    <div>

      {
        props.villains.map((ele, id) => {
          return (
            <div class="card d-inline-block w-25 mx-4 my-2">
              <img class="card-img-top img-fluid" src={ele.imageUrl}/>
              <div class="card-body">
                <h5 class="card-title">{ele.name}</h5>
                <p class="card-text">{ele.description}</p>
              </div>
            </div>)

        })
      }
    </div>




  )
}

export default Villian