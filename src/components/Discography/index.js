import React, { Component } from 'react';
import { LikeButton } from '../';

class Discography extends Component{
        state = {
            album: [
            {
                title: 'MY NAME IS MICHAEL HOLBROOK',
                image: 'https://cdn1.umg3.net/78/files/2019/10/mika-my-name-is-michael-holbrook-min.png',
                linkToAlbum: 'https://www.mikasounds.com/releases/my-name-is-michael-holbrook/',
                songs: ['Tiny Love', 'Ice Cream', 'Dear Jealousy', 'Paloma', 'Sanremo', 'Tomorrow', 'Ready To Call This Love', 'Cry', 'Platform Ballerinas', 'I Went To Hell Last Night', 'Blue', 'Stay High', "Tiny Love Reprise" ]
            },
            {
                title: 'NO PLACE IN HEAVEN',
                image: 'https://cdn1.umg3.net/78/files/2015/05/Screen-shot-2015-07-16-at-11.05.20.png',
                linkToAlbum: 'https://www.mikasounds.com/releases/no-place-in-heaven/',
                songs: ['Talk About You', 'All She Wants', 'Last Party', 'Good Guys', 'Oh Girl You\'re The Devil', 'No Place In Heaven', 'Staring At The Sun', 'Hurts', 'Good Wife', 'Rio', 'Ordinary Man','Promiseland', 'Porcelain', 'Good Guys (Night Time Mix)' ]
    
            },
            {
                title: 'SONGBOOK VOL. 1',
                image: 'https://cdn1.umg3.net/78/files/2014/03/Mika-Song-Book-Vol.-1.jpg',
                linkToAlbum: 'https://www.mikasounds.com/releases/songbook-vol-1/',
                songs: ['Relax Take It Easy', 'Grace Kelly', 'Stardust', 'Celebrate', 'We Are Golden', 'Origin Of Love', 'Big Girl (You Are Beautiful)', 'Rain', 'Underwater', 'Popular song', 'Blame It On The Girls', 'Live Your Life', 'Love Today', 'Kick Ass', 'Happy Ending', 'Lollipop', 'Stardust -Benny Benassi Mix', 'Any Other World', 'Blue Eyes', 'Karen' ]
            },
        ],
    };

    render(){
        return(
            <div className='albumContainer'>
                {this.state.album.map((album) => {
                    return (
                        <div className='recordContainer'>
                            <a href={album.linkToAlbum}><img className='resize' src={album.image} /></a>
                            <h1>{album.title}</h1>
                                <ol>{album.songs.map((songs=>{
                                    return (
                                        <div className='songsList'>
                                            <li key={songs.toString()}>{songs} <LikeButton /></li>
                                        </div>
                                    )   
                                }
                                ))}
                                </ol>
                     </div>
                    );
                })}
            </div>
        );
    };
};

export default Discography;







