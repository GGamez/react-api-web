import React, { Component } from 'react';
import Loggin, { authenticationService } from '../../Loggin';



export async function userLogged(name){

    let mitch = [];
    let muts = [];
    let players = [];
    let teams_Players = [];
    let teams = [];
    
    await fetch(`https://young-shore-87060.herokuapp.com/search/${'CREAM_Nested'}`, {
      method: 'get',
      headers: new Headers ({token: name})
    }).then(res => res.json())
      .then((data) => {
       //console.log(data)
       // let nam = name.charAt(0).toUpperCase() + name.slice(1);   
        let dato = [];
        dato = [data]    
        dato.map((match) => {
            mitch.push(match)    
            //return(mitch)
        })
        
        console.log(mitch[0])
        Object.keys(mitch[0]).map(mats => {   
            let teamName1
            let teamName2
           // console.log(mats)
            Object.keys(mitch[0][mats]).map(summo => {
                
                teamName1 = mitch[0][mats][0].summonerName.split(" ")[0]
                teamName2 = mitch[0][mats][5].summonerName.split(" ")[0]                
                players.push(mitch[0][mats][summo])
            })
            muts.push(teamName1, teamName2)
            //steams.push( {team : teamName1, team :teamName2})
                
        })
        ///console.log(players)     
        addMatch(muts, teams)
        //addMatch(players, teams)
        //console.log(teams)
        let ttt = {...teams}
       // console.log(ttt)
        teams_Players = addplayer(players, ttt)

        Object.keys(mitch[0]).map(mats => {   

            // console.log(mats)     
            let teamName1 = mitch[0][mats][0].summonerName.split(" ")[0]
            let teamName2 = mitch[0][mats][5].summonerName.split(" ")[0]
            let teamWin1 = mitch[0][mats][0].win;
            let teamWin2 = mitch[0][mats][5].win;

            if(!mitch[0][mats][0].win){
                teams_Players.map(teams => {
                    if(teams.team == teamName1){
                        teams.progress.push(-1)
                    }
                })
            }else{
                teams_Players.map(teams => {
                    if(teams.team == teamName1){
                        teams.progress.push(1)
                    }
                })
            }

            if(!mitch[0][mats][5].win){
                teams_Players.map(teams => {
                    if(teams.team == teamName2){
                        teams.progress.push(-1)
                    }
                })
            }else{
                teams_Players.map(teams => {
                    if(teams.team == teamName2){
                        teams.progress.push(1)
                    }
                })
            }

            
             //steams.push( {team : teamName1, team :teamName2})
                 
        })

        let counter = 0;   
        
       
    }).catch((e) => console.log(e))
    //return(mitch)
    //console.log(teams_Players)
        
    return(teams_Players)
}
  
function playerExists(player, playerList) {
    return playerList.some(function(el) {
      //  console.log(el.name)
        return el.name === player;
    });
}

function matchExists(team, teamList) {
    return teamList.some(function(el) {
        return el[0] === team;
    });
}



function addMatch(muts, teamList) {

    let players = []
    muts.map(teamName => {
        
        if (!matchExists(teamName, teamList)) {
            //console.log(teamList)  
            teamList.push([teamName, {matchesPlayed : Math.floor(+1)}, players] );     
        }else{
           teamList.map(teams => {
               if (teams[0] == teamName){
                teams[1].matchesPlayed += 1
               }
           })
        }
    }); 
}

function addplayer(players, teams) {
        let counter = 0;
        let teamPlayers = [];
        Object.keys(teams).map(tems => {
           console.log(teams[tems])
            teamPlayers.push({team : teams[tems][0], players : [], progress: []})
            players.map( function(summoners) {     
                //console.log(summoners.summonerName.split(" ")[0])
                let summTeam =  summoners.summonerName.split(" ")[0];
                if (summoners.summonerName.split(" ")[0] == teams[tems][0] ){
                    //console.log('asdaksfbkasfhasbfbakshfbaksfhkbasdbfk')
                    teamPlayers.map(teams => {
                        if (teams.team == summTeam ){
                            if(!playerExists(summoners.summonerName, teams.players)){
                                teams.players.push({name : summoners.summonerName, match : [summoners]})
                            }else{
                                teams.players.map(players=> {
                                    
                                    if (players.name == summoners.summonerName){
                                        players.match.push(...[summoners])
                                    }
                                })
                            }                    
                        }
                        
                    })  
                }
            })
            counter+=1;
        })
        //ttt.push(teamPlayers)
        
        return(teamPlayers)
  
}


class MatchTeam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: authenticationService.currentUserValue,
    }
  }

  

  render() {

    
//    // console.log(props)
//     let match = userLogged();
//     console.log(match) 
    return (
        <div>
          {/* <h2>MatchTeam</h2> */}
        </div>
    );
  }
}

export default MatchTeam;