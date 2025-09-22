// const amazonUser = new Object()
const amazonUser = {}

amazonUser.id = "123abc"
amazonUser.name = "Sammy"
amazonUser.isLoggedIn = false

// console.log(amazonUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "uzair",
            lastname: "awan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(amazonUser);

// console.log(Object.keys(amazonUser));
// console.log(Object.values(amazonUser));
// console.log(Object.entries(amazonUser));

// console.log(amazonUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in urdu",
    price: "999",
    courseInstructor: "uzair"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "uzair",
//     "coursename": "js in urdu",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
