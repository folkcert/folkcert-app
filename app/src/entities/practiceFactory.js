'use strict';

/**
 * @ngdoc function
 * @name ConcertApp.factory:PracticeFactory
 * @description
 * # PracticeFactory
 * Practice Entity
 */
module.exports = [
  'Song',
  function(Song) {
 
    /**
     * Constructor, with class name
     */
    function Practice(gameMode, songMode, song) {
      // Public properties, assigned to the instance ('this')
      this.gameMode = gameMode;
      this.songMode = songMode;
      this.song = song;
      this.started = false;
      this.paused = true;
      this.currentLyric = '';
    }
   
    /**
     * Public method, assigned to prototype
     */
    Practice.prototype.getSong = function() {
        return this.song;
    };

    /**
     * Public method, assigned to prototype
     */
    Practice.prototype.isStarted = function() {
        return this.started;
    };

    /**
     * Public method, assigned to prototype
     */
    Practice.prototype.isPaused = function() {
        return this.paused;
    };

    /**
     * Public method, assigned to prototype
     */
    Practice.prototype.setGameMode = function(gameMode) {
        this.gameMode = gameMode;
    };

    /**
     * Public method, assigned to prototype
     */
    Practice.prototype.setSongMode = function(songMode) {
        this.songMode = songMode;
    };

    /**
     * Public method, assigned to prototype
     */
    Practice.prototype.setSong = function(song) {
        this.song = song;
    };

    /**
     * Public method, assigned to prototype
     */
    Practice.prototype.startGame = function() {
        this.started = true;
    };

    /**
     * Public method, assigned to prototype
     */
    Practice.prototype.setPaused = function(paused) {
        this.paused = paused;
    };

    /**
     * Public method, assigned to prototype
     */
    Practice.prototype.addLyric = function(lyric) {
        this.currentLyric = lyric + '#@#';
    };

    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Practice.build = function(data) {
        if (data) {
            return new Practice(
                data.gameMode,
                data.songMode,
                Song.build(data.song)
            );
        } else {
            return new Practice();
        }
    };
   
    /**
     * Return the constructor function
     */
    return Practice;
  }
];
