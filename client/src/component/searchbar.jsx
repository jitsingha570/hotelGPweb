import React from 'react'

function Searchbar() {
    return (
      <div style={styles.container}>
        <input type="number" placeholder="No of rooms" style={styles.input} />
        <input type="number" placeholder="No of guests" style={styles.input} />
        <input type="date" placeholder="Check-in date" style={styles.input} />
        <input type="date" placeholder="Check-out date" style={styles.input} />
        <button style={styles.button}> search</button>
      </div>
    );
  }
  
  export default Searchbar;

  const styles = {
    container: {
      display: 'flex',

      justifyContent: 'center',
      position: 'relative',
        top: '100px',
      width: '100%',
      height: '50px',
        backgroundColor: 'transparent',
       gap: '50px',
        zIndex: '10000',
    },

    input: {
      width: '200px',
      height: '20px',
      padding: '5px',
    },
    button: {
      width: '200px',
      height: '30px',
      
      padding: '5px',
      backgroundColor: 'orange',
      
      cursor: 'pointer',
    },
  };
  

// This is the Searchbar component. It takes three input fields for number of rooms, number of guests, and check-in and check-out dates. The input fields have placeholder text for the respective fields.