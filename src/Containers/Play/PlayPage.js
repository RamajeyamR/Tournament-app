import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Target_Icon } from '../../Constants/SvgLocations'
import { actuatedNormalize } from '../../Constants/PixelScaling'
import Fonts from '../../Constants/Fonts'

const PlayPage = () => {
    const user = useSelector(state => state.users.currentUser)
    let JoinedMatches ;
    user.map(user =>JoinedMatches = user.registeredMatch)
  return (
    <View style={{flex:1}}>
        <StatusBar translucent={true} backgroundColor={'#000000'} />
        <View style={styles.rootContainer}>
            <FlatList 
                data={JoinedMatches}
                keyExtractor={(item)=>item.matchId}
                renderItem={({item})=>{
                    return(
                        <View style={{
                            backgroundColor:'#FFFFFF',
                            margin:actuatedNormalize(10),
                            borderRadius : actuatedNormalize(5),
                            elevation : 5
                        }}>
                            <View style={{
                                padding:actuatedNormalize(20)
                            }}>
                                <View style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                }}>
                                    <Target_Icon height={actuatedNormalize(48)} width={actuatedNormalize(48)} />
                                    <View style={{
                                        marginLeft :actuatedNormalize(10),

                                    }}>
                                        <Text style={{
                                            fontFamily:Fonts.Bold,
                                            fontSize : actuatedNormalize(18),
                                            color : '#000000'
                                        }}>{item.matchtype} MATCH</Text>
                                        <Text style={{
                                            fontFamily:Fonts.Bold,
                                            fontSize:actuatedNormalize(10),
                                            color: '#000000'
                                        }}>DATE : {item.matchDate}  </Text>
                                        <Text style={{
                                            fontFamily:Fonts.Bold,
                                            fontSize:actuatedNormalize(10),
                                            color: '#000000'
                                            }}>TIME : {item.matchTime}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection:'row',
                                    marginTop : actuatedNormalize(15),
                                    justifyContent : 'space-evenly'
                                }}>
                                    <View style={{
                                        alignItems:'center',
                                    }}>
                                        <Text style={{
                                            fontFamily:Fonts.Medium,
                                            color: '#000000',
                                            fontSize:actuatedNormalize(12)
                                        }}>WIN PRIZE</Text>  
                                        <Text style={{
                                            fontFamily:Fonts.Bold,
                                            color: '#000000',
                                            fontSize :actuatedNormalize(15)
                                        }}>₹ {item.winPrize}</Text>
                                    </View>
                                    <View style={{
                                        alignItems:'center',
                                    }}>
                                        <Text style={{
                                            fontFamily:Fonts.Medium,
                                            color: '#000000',
                                            fontSize:actuatedNormalize(12)
                                        }}>PER KILL</Text>  
                                        <Text style={{
                                            fontFamily:Fonts.Bold,
                                            color: '#000000',
                                            fontSize :actuatedNormalize(15)
                                        }}>₹ {item.prizePerKill}</Text>
                                    </View>
                                    <View style={{
                                        alignItems:'center',
                                    }}>
                                        <Text style={{
                                            fontFamily:Fonts.Medium,
                                            color: '#000000',
                                            fontSize:actuatedNormalize(12)
                                        }}>ENTRY FEE</Text>  
                                        <Text style={{
                                            fontFamily:Fonts.Bold,
                                            color: '#000000',
                                            fontSize :actuatedNormalize(15)
                                        }}>₹ {item.entryFee}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection:'row',
                                    marginTop : actuatedNormalize(15),
                                    justifyContent : 'space-evenly',
                                    alignItems:'center',
                                }}>
                                    <View style={{
                                        alignItems:'center',
                                    }}>
                                        <Text style={{
                                            fontFamily:Fonts.Medium,
                                            color: '#000000',
                                            fontSize:actuatedNormalize(12)
                                        }}>TYPE</Text>  
                                        <Text style={{
                                            fontFamily:Fonts.Bold,
                                            color: '#000000',
                                            fontSize :actuatedNormalize(15)
                                        }}>{item.matchtype}</Text>
                                    </View>
                                    <View style={{
                                        alignItems:'center',
                                    }}>
                                        <Text style={{
                                            fontFamily:Fonts.Medium,
                                            color: '#000000',
                                            fontSize:actuatedNormalize(12)
                                        }}>VERSION</Text>  
                                        <Text style={{
                                            fontFamily:Fonts.Bold,
                                            color: '#000000',
                                            fontSize :actuatedNormalize(15)
                                        }}>{item.camerModec}</Text>
                                    </View>
                                    <View style={{
                                        alignItems:'center',
                                    }}>
                                        <Text style={{
                                            fontFamily:Fonts.Medium,
                                            color: '#000000',
                                            fontSize:actuatedNormalize(12)
                                        }}>MAP</Text>  
                                        <Text style={{
                                            fontFamily:Fonts.Bold,
                                            color: '#000000',
                                            fontSize :actuatedNormalize(15)
                                        }}>{item.map}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                margin :actuatedNormalize(10),
                                flexDirection: 'row',
                                alignItems : 'center'
                            }}>
                                <View style={{width : '70%', alignItems:'flex-end'}}>
                                    <View style={{
                                        height :actuatedNormalize(5),
                                        width :'100%',
                                        backgroundColor : '#66e0ff'
                                    }}>
                                        <View style={{
                                            height : actuatedNormalize(5),
                                            backgroundColor : '#008ae6',
                                            width : `${item.joinedPlayer}%`
                                        }}/>
                                    </View>
                                    <View style={{
                                        marginTop : actuatedNormalize(5)
                                    }}>
                                        <Text style={{
                                            fontFamily:Fonts.Bold,
                                            fontSize :actuatedNormalize(10),
                                            color: '#000000'
                                        }}>{item.joinedPlayer} / {item.maxPlayer}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    marginLeft : actuatedNormalize(10),
                                    backgroundColor : '#00000040',
                                    justifyContent : 'center',
                                    alignItems:'center',
                                    padding : actuatedNormalize(10),
                                    width : '25%',
                                    borderRadius : actuatedNormalize(5)
                                }}>
                                    <Text style={{
                                        color : '#FFFF',
                                        fontFamily : Fonts.Medium,
                                        fontSize : actuatedNormalize(10)
                                    }}>{`Match \njoined`}</Text>
                                </View>       
                            </View>
                        </View>
                    )
                }}
                
            />
        </View>
    </View>
  )
}

export default PlayPage

const styles = StyleSheet.create({
    rootContainer : {
        backgroundColor : '#bfbfbf',
        flex : 1
    }
})