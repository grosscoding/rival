<script>
    let playerName = ''; // Variable to store the entered player name
  
    function addPlayer() {
      // Function called when the "add" button is clicked
      // You can perform any additional logic or save the playerName variable to your desired location here
      console.log('Player Name:', playerName);
    }
</script>
  
  <div>
    <label for="nameInput">Player Name:</label>
    <input type="text" id="nameInput" bind:value={playerName} placeholder="Enter player name" />
  
    <button on:click={addPlayer}>Add</button>
  </div>
  