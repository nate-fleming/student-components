const studentContainer = document.querySelector('#container')
const h1 = function (e) {
    return `<h1>${e}</h1>`
}
const section = function (e) {
    return `<section>${e}</section>`
}
const aside = function (e) {
    return `<aside>${e}</aside>`
}

const element = function (type, content, value) {
    return `<${type} class='${value}'>${content}</${type}>`
}



// const createStudentComponent = (student) => {
//     return `
//         <div class="student">
//             ${h1(student.name)}
//             ${section(student.section)}
//             ${aside(student.info)}
//         </div>
//     `
// }

const createStudentComponent = (student) => {`
    <div class="student">
        ${element("h1", student.name, "xx-large passing")}
        ${element("section", student.subject, "bordered dashed section--padded")}
        ${element("aside", student.info, "pushRight")}
    </div>
`
}

const createPassingStudent = (student) => {
    return `
        <div class="student">
            <h1 class="xx-large passing">${student.name}</h1>
            <section class="bordered dashed section--padded">${student.subject}</section>
            <aside class="pushRight">${student.info}</aside>
        </div>
    `
}

for (const student of students) {
    let studentComponent = ''
    if (student.score >= 60) {
        studentComponent = createPassingStudent(student)
    } else {
        studentComponent = createStudentComponent(student)
    }
    studentContainer.innerHTML += studentComponent
}