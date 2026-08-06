# NETFLIX-GPT

1. SETUP-APP
    - I build my React applications using Vite as the build tool toolchain instead of the legacy Create React
     App. It leverages native ES modules, which gives me a much faster development server and highly optimized    production builds via Rollup.
    - I use here Tailwind(4.3.3) for designing & for installation follow docs in [Tailwindcss.com](https://tailwindcss.com/docs/installation/using-vite)
2.  Journey-01:
    -Browse page added (Routing)
    -Loginpage added
    -validation
    -Firebase setup 
    -First deployed
3.  Bugs solved:01
    -login/signup navigation
    -Made a another root level state logic component returning outlet for giving logic to all.
    -Routing Improved
    -usenavigate:Deleted from every component and and given to authstate api to handle.
    -unsubscribe function added- as appcomponent unmount react call this return function for cleanup,to get  rid from future conflicts.
4.  Journey-02
    -import TMDB 
    -create a movie slice
    -add data to that slice
    -nowplaying movies available global in app.
5.  Netflixmain page
    -planning.
        -Header
        -Maincontainer
            -Titlecontainer
            -Videocontainer
        -Secondarycontainer
            -secondary main contianer
                -listcontainer *n 
                    -moviecardcontainer *n
6. Netflixmain page-features-progresses
    -TMDB used and setted all movie in store as new slice
    -Title slice added by fetching video data from TMDB 
    -Trailer movie added in a movies slice
    -Title container builded
    -Video container builded
    -secondary container builded
    -data driven ui builded
    -some movie category added in movies slice in store
    -Store clears when Logout to avoid data leak.
    -Nav bar popup added.
7.  Browse page builded
    -With accordian
    -store slice updated 
    -cards embeded      