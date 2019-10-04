
const items = [
        // this is the parent or 'item'
        {
          name: 'ABC News',
          id: 1,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'ABC News(AU)',
          id: 2,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Aftenposten',
          id: 3,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Al Jazeera English',
          id: 4,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'ANSA.it',
          id: 5,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Argaam',
          id: 6,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Ars Technica',
          id: 7,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Ary News',
          id: 8,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Associated Press',
          id: 9,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Australian Financial Review',
          id: 10,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Axios',
          id: 11,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'BBC News',
          id: 12,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'BBC Sport',
          id: 13,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Bild',
          id: 14,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Blasting News (BR)',
          id: 15,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Bleacher Report',
          id: 16,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Bloomberg',
          id: 17,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Breitbart News',
          id: 18,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Business Insider',
          id: 19,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Business Insider (UK)',
          id: 20,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Buzzfeed',
          id: 21,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'CBC News',
          id: 22,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'CBS News',
          id: 23,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'CNBC',
          id: 24,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'CNN',
          id: 25,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'CNN Spanish',
          id: 26,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Crypto Coins News',
          id: 27,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Daily Mail',
          id: 28,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Der Tagesspiegel',
          id: 29,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Die Zeit',
          id: 30,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'El Mundo',
          id: 31,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Engadget',
          id: 32,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        }, 
        {
          name: 'Entertainment Weekly',
          id: 33,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'ESPN',
          id: 34,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'ESPN Cric Info',
          id: 35,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Financial Post',
          id: 36,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Focus',
          id: 37,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Football Italia',
          id: 38,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Fortune',
          id: 39,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'FourFourTwo',
          id: 40,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Fox News',
          id: 41,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Fox Sports',
          id: 42,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Globo',
          id: 43,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Google News',
          id: 44,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Göteborgs-Posten',
          id: 45,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Gruenderszene',
          id: 46,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Hacker News',
          id: 47,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Handelsblatt',
          id: 48,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'IGN',
          id: 49,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Il Sole 24 Ore',
          id: 50,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Independent',
          id: 51,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Infobae',
          id: 52,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'InfoMoney',
          id: 53,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'La Gaceta',
          id: 54,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'La Nacion',
          id: 55,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'La Repubblica',
          id: 56,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Le Monde',
          id: 57,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Lenta',
          id: 58,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'L\'equipe',
          id: 59,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Les Echos',
          id: 60,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Libération',
          id: 61,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Marca',
          id: 62,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Mashable',
          id: 63,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Medical News Today',
          id: 64,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Metro',
          id: 65,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Mirror',
          id: 66,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'MSNBC',
          id: 67,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'National Geographic',
          id: 68,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },{
          name: 'MTV News',
          id: 69,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'National Review',
          id: 70,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'NBC News',
          id: 71,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'News24',
          id: 72,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'New Scientist',
          id: 73,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'News.com.au',
          id: 74,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Newsweek',
          id: 75,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'New York Magazine',
          id: 76,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Next Big Future',
          id:77,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'NFL News',
          id: 78,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'NHL News',
          id: 79,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'NRK',
          id: 80,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Politico',
          id: 81,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Reuters',
          id: 82,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'MSNBC',
          id: 83,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'TechCrunch',
          id: 84,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'TechRadar',
          id: 85,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'The American Conservative',
          id: 86,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },{
          name: 'The Hindu',
          id: 87,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'The Wall Street Journal',
          id: 88,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'The Times of India',
          id: 89,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'The Telegraph',
          id: 90,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'The Verge',
          id: 91,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Time',
          id: 92,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'USA Today',
          id:93,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Vice News',
          id: 94,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Wired',
          id: 95,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Wired.de',
          id: 96,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Economic week',
          id: 97,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Xinhua Net',
          id: 98,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
        {
          name: 'Ynet',
          id: 99,
          icon: {uri: 'https://img.etimg.com/thumb/msid-71233405,width-300,imgsize-409033,resizemode-4/tax-.jpg'}
        },
       
      ]
    
const categories=[
    {
        name:"Business",
        id:"1"
    },
    {
        name:"Entertainment",
        id:"2"
    },
    {
        name:"Health",
        id:"3"
    },
    {
        name:"Science",
        id:"4"
    },
    {
        name:"Sports",
        id:"5"
    },
    {
        name:"Technology",
        id:"6"
    },
]
export  {items,categories};