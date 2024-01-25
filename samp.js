function makeActive(linkId) {
    // Remove "active" class from all links
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }

    // Add "active" class to the clicked link
    var clickedLink = document.getElementById(linkId);
    clickedLink.classList.add('active');
  }

  function handleFileUpload() {
    // Trigger the file input when the button is clicked
    document.getElementById('fileInput').click();
  }


  async function fetchAudioFiles() {
    try {
      const response = await fetch('http://localhost:3000/api/audio-files');
      const audioFiles = await response.json();

      // Display audio files in the "ps" div
      const psDiv = document.getElementById('ps');
      audioFiles.forEach(audioFile => {
        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        audioElement.src = `http://localhost:3000/audio/${audioFile}`;
        psDiv.appendChild(audioElement);
      });
    } catch (error) {
      console.error('Error fetching audio files:', error);
    }
  }

  // Fetch and display audio files when the page loads
  window.onload = fetchAudioFiles;