(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},27:function(e,t,n){e.exports=n(58)},33:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(25),o=n.n(l),s=(n(33),n(2)),c=n(3),i=n(5),u=n(4),m=n(6),h=(n(12),n(7)),p=n.n(h),d=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"App landing-page bigMarginLeft "},r.a.createElement("header",{className:""},r.a.createElement("img",{src:"../images/barbellsX.png",className:"App-logo",alt:"logo"})),r.a.createElement("img",{className:"bigLogo",src:"../images/gymfleuxlogo.png",alt:"logo"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"organize-section"},r.a.createElement("section",null,r.a.createElement("div",{className:"organize-title"},r.a.createElement("h1",null,"Organize your workouts!!"),r.a.createElement("p",null,"Select your workouts from our exercise list and for each day of the week!")),r.a.createElement("div",{className:"organize-img"},r.a.createElement("img",{className:"img-border",src:"https://dannykennedyfitness.com/wp-content/uploads/2016/04/Barbell-Squat.png",alt:""}),r.a.createElement("img",{className:"img-border calendar-bg",src:"https://cdn.iconscout.com/icon/premium/png-256-thumb/workout-schedule-1-539287.png",alt:"workout Calendar"}),r.a.createElement("img",{className:"img-border",src:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Bodyweight_Walking_Lunge1.png",alt:""})))),r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"gold-bg"},r.a.createElement("h1",null,"It's No Sweat!!"),r.a.createElement("p",null,"we provide the workout with easy to read images for instructions"),r.a.createElement("div",{className:"img-section"},r.a.createElement("img",{className:"image-resize",src:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Sit-up_F_WorkoutLabs.png",alt:""}),r.a.createElement("img",{className:"image-resize",src:"https://exerciseeggheads.files.wordpress.com/2018/01/pushup.png?w=980",alt:""}),r.a.createElement("img",{className:"image-resize",src:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Pullup.png",alt:""}),r.a.createElement("img",{className:"image-resize",src:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Barbell_Curl.png",alt:""}),r.a.createElement("img",{className:"image-resize",src:"http://www.vitalsupp.com/wp-content/uploads/2016/09/Screen-Shot-2016-09-21-at-11.25.21-PM.png",alt:""}),r.a.createElement("img",{className:"image-resize",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2Xj0wzv7R4bsnYGX9xn33JSx3eOZNF4Jjg0qQGyaE_3arAFe",alt:""})))))}}]),t}(a.Component),g=n(61),E=n(62),f=n(14),y=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,n){return t.service.post("/signup",{username:e,password:n}).then(function(e){return e.data})},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var n=p.a.create({baseURL:"http://localhost:5000/api",withCredentials:!0});this.service=n},v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={usernameInput:"",passwordInput:""},n.userService=new y,n.handleChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.handleFormSubmit=function(e){e.preventDefault(),n.userService.login(n.state.usernameInput,n.state.passwordInput).then(function(e){n.setState({usernameInput:"",passwordInput:""}),n.props.logTheUserIntoAppComponent(e),n.props.history.push("/")}).catch(function(e){console.log("sorry something went wrong",e)})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"usernameInput",value:this.state.usernameInput,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{name:"passwordInput",value:this.state.passwordInput,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("button",{className:"button",type:"submit"},"Login")))}}]),t}(a.Component),b=n(59),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={allTheExercises:[]},n.fetchExercises=function(){p.a.get("http://localhost:5000/api/exercises").then(function(e){n.setState({allTheExercises:e.data.reverse()})}).catch(function(e){})},n.showLowerBody=function(){if(n.state.allTheExercises){var e=[];n.state.allTheExercises.filter(function(t){return"quadriceps"!==t.primary&&"hamstrings"!==t.primary&&"calves"!==t.primary&&"glutes"!==t.primary||e.push(t),t});return e.map(function(e){return r.a.createElement("div",{className:"lower-body-column",key:e._id},r.a.createElement("h3",null,e.title),r.a.createElement("h6",null,e.primary),r.a.createElement(b.a,{to:"/exercise/details/"+e._id},"See Details"),r.a.createElement("hr",null))})}},n.showUpperBody=function(){var e=[];n.state.allTheExercises.filter(function(t){return"chest"!==t.primary&&"abs"!==t.primary&&"trapezius"!==t.primary&&"biceps"!==t.primary&&"triceps"!==t.primary&&"upper back"!==t.primary&&"shoulders"!==t.primary||e.push(t),t});return e.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("div",{className:"transparentBG"},r.a.createElement("h3",null,e.title),r.a.createElement("h6",null,e.primary),r.a.createElement(b.a,{to:"/exercise/details/"+e._id},"See Details"),r.a.createElement("hr",null)))})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.fetchExercises()}},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"exercisePage"},r.a.createElement("h1",null,"Exercises"),r.a.createElement("div",{className:"twoExercises"},r.a.createElement("div",{className:"upperBody columns"},this.showUpperBody()),r.a.createElement("div",{className:"lowerBody columns"},this.showLowerBody()))))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={usernameInput:"",passwordInput:"",heightInput:"",weightInput:"",dateOfBirthInput:"",bioInput:"",sundayRoutine:[],mondayRoutine:[],tuesdayRoutine:[],wednesdayRoutine:["HEHEHEHEHEHEHEh"],thursdayRoutine:[],fridayRoutine:[],saturdayRoutine:[],profilePic:""},n.service=new y,n.handleChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.handleFormSubmit=function(e){e.preventDefault(),n.service.signup(n.state.usernameInput,n.state.passwordInput,n.state.heightInput,n.state.weightInput,n.state.dateOfBirthInput,n.state.bioInput).then(function(e){console.log("------------------------",e),n.props.logTheUserIntoAppComponent(e),n.setState({usernameInput:"",passwordInput:""}),n.props.history.push("/exercise-index")}).catch(function(e){console.log("sorry something went wrong",e)})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"usernameInput",value:this.state.usernameInput,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"text",name:"passwordInput",value:this.state.passwordInput,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Height:"),r.a.createElement("input",{type:"text",name:"heightInput",value:this.state.heightInput,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Weight:"),r.a.createElement("input",{type:"text",name:"weightInput",value:this.state.weightInput,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Bio:"),r.a.createElement("input",{type:"textfield",name:"bioInput",value:this.state.bioInput,placeholder:"Tell us about your #gymfleux",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(b.a,{to:"/"}," Login")))}}]),t}(a.Component),I=n(15),x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={user:"",weekday:"",dateCreated:"",allRoutines:[]},n.fetchRoutines=function(){p.a.get("http://localhost:5000/api/routines",{withCredentials:!0}).then(function(e){n.setState({allRoutines:e.data.reverse()})}).catch(function(e){})},n.deleteRoutine=function(){p.a.post("http://localhost:5000/api/routines/delete/"+n.state.allRoutines._id,{}).then(function(){n.props.history.push("/profile")}).catch(function(){})},n.addExercise=function(e){p.a.post("http://localhost:5000/api/routines/edit/"+e._id,{theExerciseToAdd:n.props.theExercieID}).then(function(e){}).catch(function(e){})},n.showRoutines=function(){return n.state.allRoutines.map(function(e){return console.log("-=-=-=-=-=-=-=-=-",e),r.a.createElement("button",{onClick:function(){return n.addExercise(e)}},e.allRoutines)})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.fetchRoutines()}},{key:"render",value:function(){return r.a.createElement("div",null,this.showRoutines())}}]),t}(a.Component),C=(a.Component,function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={titleInput:"",primaryInput:"",secondaryInput:"",typeInput:"",imageInput:"",sunday:!1,monday:!1,tuesday:!1,wednesday:!1,thursday:!1,friday:!1,saturday:!1},n.handleChange=function(e){console.log(e.target.value),n.setState(Object(f.a)({},e.target.value,!n.state[e.target.value]))},n.handleSubmit=function(e){e.preventDefault(),console.log(Object(I.a)(Object(I.a)(n)));var t=n.props.match.params.id;p.a.post("http://localhost:5000/api/routines/details/"+t,{state:n.state},{withCredentials:!0}).then(function(e){console.log(e,"EXERCISE FROM API EXERCISE FROM API EXERCISE FROM API EXERCISE FROM API"),n.props.history.push("/profile")})},n.addExerciseToRoutine=function(e){return n.setState({})},n.showExerciseDetails=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,n.state.titleInput),r.a.createElement("h3",null,"Primary Muscle: ",n.state.primaryInput),r.a.createElement("h4",null,"Secondary: ",n.state.secondaryInput),r.a.createElement("h4",null,"Type: ",n.state.typeInput)),r.a.createElement("div",null,r.a.createElement("img",{className:"exercise-img",src:n.state.imageInput,alt:"Example"})))},n.showForm=function(){if(n.state.formShowing)return r.a.createElement("div",null,r.a.createElement("h2",null,"the form has arrived"),r.a.createElement(x,{theExercieID:n.props.match.params.id}),r.a.createElement("div",null,n.state.sunday),r.a.createElement("form",{onSubmit:n.handleSubmit},r.a.createElement("input",{type:"checkbox",name:"Sunday",value:"sunday",onChange:function(e){return n.handleChange(e)}}),"Sunday",r.a.createElement("input",{type:"checkbox",name:"Monday",value:"monday",onChange:function(e){return n.handleChange(e)}}),"Monday",r.a.createElement("input",{type:"checkbox",name:"Tuesday",value:"tuesday",onChange:function(e){return n.handleChange(e)}}),"Tuesday",r.a.createElement("input",{type:"checkbox",name:"Wednesday",value:"wednesday",onChange:function(e){return n.handleChange(e)}}),"Wednesday",r.a.createElement("input",{type:"checkbox",name:"Thursday",value:"thursday",onChange:function(e){return n.handleChange(e)}}),"Thursday",r.a.createElement("input",{type:"checkbox",name:"Friday",value:"friday",onChange:function(e){return n.handleChange(e)}}),"Friday",r.a.createElement("input",{type:"checkbox",name:"Saturday",value:"saturday",onChange:function(e){return n.handleChange(e)}}),"Saturday",r.a.createElement("input",{type:"submit",value:"Submit"})))},n.toggleForm=function(){n.setState({formShowing:!n.state.formShowing})},n.showWeekdays=function(){return r.a.createElement("button",{className:"button"})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.id;console.log("JFEFFHGRRGSHFEFGSHFHEFGDFSFEGSHFHEFGFD",t),p.a.get("http://localhost:5000/api/exercise/details/"+t).then(function(t){console.log("------___---__-_-_--_-_-__-_-_-_-_-___-_-----",t),e.setState({titleInput:t.data.title,primaryInput:t.data.primary,secondaryInput:t.data.secondary,typeInput:t.data.type,imageInput:t.data.image})}).catch(function(e){console.log("~~~~~~~~~~~~~~~~~",e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"exerciseDetails detailsBorder"},r.a.createElement("h1",{className:"detailsTitle"}," Exercise Details Page"),r.a.createElement("div",{className:"detailsBorder marginLeftAndRight"},this.showExerciseDetails(),r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("h1",null,"Do you like this workout?"),r.a.createElement("button",{className:"button",type:"submit",onClick:this.toggleForm},"Add to Routine"),this.showForm(),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"emoji"},r.a.createElement("button",{type:"button",className:"emojiButton"},"\ud83d\udcaa"),"like button")))}}]),t}(a.Component)),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={routines:[]},n.fetchUserRoutines=function(){p.a.get("http://localhost:5000/api/routines/",{withCredentials:!0}).then(function(e){console.log("ooooOOOOOoooooOOOOOoOOOOoOoOOOOOooOOOOOOoO",e),n.setState({routines:e.data})}).catch(function(e){})},n.deleteRoutine=function(e){p.a.post("http://localhost:5000/api/routines/delete",{day:e},{withCredentials:!0}).then(function(){window.location.reload()}).catch(function(){})},n.showEachDay=function(e){return e.map(function(e){return console.log(e),r.a.createElement("div",{className:"exercise"},r.a.createElement("h3",null,e.title),r.a.createElement("img",{className:"exercise-img",src:e.image}))})},n.showRoutines=function(){console.log(n.state.routines),console.log(typeof n.state.routines);var e=n.state.routines[0];if(console.log(e),e)return["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].map(function(t){if(e[t])return r.a.createElement("div",{className:"day"},r.a.createElement("h3",null,t),r.a.createElement("button",{onClick:function(){n.deleteRoutine(t)}},"Delete"),n.showEachDay(e[t]))})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchUserRoutines(),this.showRoutines()}},{key:"render",value:function(){return console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~",this.state,this.props),r.a.createElement("div",null,r.a.createElement("div",{className:"calendar"},this.showRoutines()))}}]),t}(a.Component),k=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loggedInUser:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"fixed-top navbar flex-end"},r.a.createElement("img",{className:"nav-logo",src:"../images/gymfleuxlogo.png",alt:"logo"}),this.props.showUser(),r.a.createElement("ul",{class:"nav justify-content-center"},r.a.createElement("li",{class:"nav-item"},r.a.createElement(b.a,{class:"nav-link",to:"/"},"Home")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(b.a,{class:"nav-link",to:"/profile"},"Profile")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(b.a,{class:"nav-link",to:"/exercise-index"},"Exercises")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(b.a,{class:"nav-link",to:"/signup"},"Signup")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(b.a,{class:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(b.a,{class:"nav-link",to:"/logout"},"Logout"))))}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={loggedInUser:null,formShowing:!1},n.service=new y,n.logInTheUser=function(e){n.setState({loggedInUser:e})},n.showUser=function(){if(n.state.loggedInUser)return r.a.createElement("div",null," Welcome ",n.state.loggedInUser.username)},n.logout=function(){n.service.logout().then(function(){n.setState({loggedInUser:null})})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(e){this.fetchUser()}},{key:"fetchUser",value:function(){var e=this;this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){console.log("catch getting hit"),e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement("div",{className:"topPadding"},r.a.createElement(k,{showUser:this.showUser}),r.a.createElement(g.a,null,r.a.createElement(E.a,{path:"/exercise-index",render:function(t){return r.a.createElement(w,Object.assign({},t,{currentUser:e.state.loggedInUser}))}}),r.a.createElement(E.a,{path:"/exercise/details/:id",component:C}),r.a.createElement(E.a,{path:"/signup",render:function(t){return r.a.createElement(O,Object.assign({},t,{logTheUserIntoAppComponent:e.logInTheUser}))}}),r.a.createElement(E.a,{path:"/login",render:function(t){return r.a.createElement(v,Object.assign({},t,{logTheUserIntoAppComponent:e.logInTheUser}))}}),r.a.createElement(E.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(d,Object.assign({},t,{logTheUserIntoAppComponent:e.logInTheUser}))}}),r.a.createElement(E.a,{path:"/profile",render:function(t){return r.a.createElement(j,{userPassedToProfile:e.state.loggedInUser})}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(60);o.a.render(r.a.createElement(N.a,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.8062dee9.chunk.js.map