export const NavbarLinks = [
    {
        title:'Home',
        link:'/home'
    },
    {
        title:'Flashcard',
        link:'/flashcard'
    },
    {
        title:'Contact',
        link:'/contact'
    },
    {
        title:'FAQ',
        link:'/faqs'
    },
]


export const Buttons = [
    {
        title: "Login",
        onclick:`()=navigate('/login')`
    }
]

export const CurrentPageExplore = [
    {
        tag: 'Study',
        data : [
            {
                id:0,
                questions:'9 + 6 + 7x - 2x - 3'
            },
            {
                id:1,
                questions:'Alok Ranjan'
            },
            
        ]
    },
    {
        tag: 'Quiz',
        data : []
    },
    {
        tag: 'Test',
        data : []
    },
    {
        tag: 'Game',
        data : []
    },
    {
        tag: 'Others',
        data : []
    },
]



export const FAQs = [
    'Can education flashcards be used for all age groups?',
    'How do education flashcards work?',
    'Can education flashcards be used for test preparation?'
]