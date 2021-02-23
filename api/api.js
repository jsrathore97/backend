const express = require('express');
const app = express();
const db = require('../database/db');

//Registration API   START
app.post('/api/registration'  ,  (req  ,  res)=>{
    let sql = 'insert into registration set ?' ;
    let data = {
        first_Name : req.body.fname,
        last_Name : req.body.lname,
        city  :  req.body.city,
        email : req.body.email,
        password  : req.body.pass,
        role : req.body.role
    }

    db.query(sql , data , function( err , result){
        console.log(sql);
        console.log(data);
        if(err){
            console.log(err);
        } else{
            res.json({ status : "success" });
        }
    })  

})
//Registration API   END


//Login API (USER)  START
app.post('/api/login' , (req , res) =>{
    console.log(req.body);
    async function test(){
        var s= await login_query(req.body);
        console.log('hiiiiiiiiii',s);
        if(s.length >0){
            console.log("if");
                        res.json({status : 'matched' , data : s} );
                    } else{
                        res.json({status : 'not matched' });
                    }
    }
    test();
   
});

function login_query(data) {
    return new Promise(function (resolve, reject) {
        let sql = `select first_Name , last_Name , email , city,role  from registration where email="${data.email}" and password="${data.password}" and role="${data.role}"`
        db.query(sql, (err, result) => {
            //   console.log(sql);
            if (err) console.log(err);
            else{
                // console.log(result);
                resolve(result);
            } 
        })
    });
}
//Login API (USER)  END


//Login API (Admin) START
app.post('/api/admin/login' , (req , res) =>{
    console.log(req.body);
    async function admin_login_exe(){
        var s= await login_admin(req.body);
        console.log('hiiiiiiiiii',s);
        if(s.length >0){
            console.log("if");
                        res.json({status : 'matched' , data : s} );
                    } else{
                        res.json({status : 'not matched' });
                    }
    }
    admin_login_exe();
   
});

function login_admin(data) {
    return new Promise(function (resolve, reject) {
        let sql = `select first_Name , last_Name , email , city ,role from registration where email="${data.email}" and password="${data.password}" and role="${data.role}"`
        db.query(sql, (err, result) => {
            //   console.log(sql);
            if (err) console.log(err);
            else{
                // console.log(result);
                resolve(result);
            } 
        })
    });
}
//Login API (Admin) END

//USER DETAILS BY ID   START
app.post('/api/getUserByEmail_id' , (req , res)=>{
        async function getUsers(){
            var users = await getAllUsers(req.body);
            console.log(users);
            if(users.length >0){
            
                            res.json({data:users});
                        } else{
                            res.json("something went wrong");
                        }

        }
        getUsers();
})

function getAllUsers(data){
      return new Promise (function (resolve , reject){
          let sql = `select * from registration where id ="${data.id}"`;
          db.query(sql ,(err , result)=>{
              if(err){
                  console.log(err);
              } else{
                  resolve(result);
              }
          })
      })
}
//USER DETAILS BY ID   END



//GET ALL USER DETAILS   START
app.get('/api/getAllUsers' ,(req, res)=>{
        let sql = 'select first_Name,last_Name,id from registration ';
        db.query(sql , function(err , result){
            if(err){
                console.log(err);
            } else{
                res.json(result);
            }
        })
})
//GET ALL USER DETAILS   END



//EMAIL EXISTANCE CHECK ON REGISTRATION TIME   START
app.post('/api/checkExistance' , (req , res)=>{
    let sql = `select * from registration where email="${req.body.email}" `
    db.query(sql , function (err , result){
        if(err){
            console.log(err);
        } else{
            if(result.length > 0){
                res.json({ status : 'User already exists' } )
            } else{
                res.json({ status : 'Please register user' });
            }
        }
    })
});
//EMAIL EXISTANCE CHECK ON REGISTRATION TIME   END




// Add Schhol API START
app.post('/api/addSchool' , (req,res)=>{
    let sql = `insert into school set ?`;
    let data = {
        school_name : req.body.school_name,
        city  :  req.body.city_name
    }
   db.query(sql , data , function(err , result){
        if(err){
            console.log(err);
        } else{
            res.json("success")
        }
   })
})
// Add Schhol API END


//GET ALL SCHOOL API  START
// app.get('/api/getSchool' , (req, res)=>{
//     async function getSchool(){
//         let schooldata = await get_school(req.body);
//         if(schooldata.length > 0){
//             res.json(schooldata)
//         } else{
//             res.json("something went wrong")
//         }
//     }

//     getSchool();
// })

// function get_school(data){
//     return new Promise (function  (resolve , reject){
//         let sql =  `select * from school` ; 
//         db.query(sql , function (err , result){
//             if(err){
//                 console.log(err);
//             } else{
//                 resolve(result)
//             }
//         })
//     })
// }

app.get('/api/getSchool' , (req , res)=>{
    let sql = `select * from school` ;
    db.query(sql , function (err , result){
        if(err){
            console.log(err);
        } else {
            if(result.length > 0){
                res.json(result)
            } else{
                res.json("something went wrong");
            }
        }
    })
})


//ADD CLASS NAME API   START
app.post('/api/addClass' , (req , res)=>{
    async function addSchool(){
        let classdata = await add_class(req.body);
        if(classdata.length > 0){
            res.json(classdata)
        } else{
            res.json("something went wrong");
        }
    }
    addSchool();
})

function add_class(data){
    console.log(data);
    return new Promise(function  (resolve , reject){
        let sql = `insert into class set ? ` ; 
        temp = {
            class_shortName : data.classShortName,
            class_fullName : data.classFullName
        }
        db.query(sql , temp , function (err , result){
            if(err){
                console.log(err);
            } else{
                resolve("success")
            }
        })
    })
}


app.get('/api/getClass' , (req , res)=>{
    let sql = `select * from class` ;
    db.query(sql , function (err , result){
        if(err){
            console.log(err);
        } else {
            if(result.length > 0){
                res.json(result)
            } else{
                res.json("something went wrong");
            }
        }
    })
})


app.post('/api/addUniversity' , (req , res)=>{
    async function addUniv(){
            let universitydata = await add_university(req.body);
            if(universitydata.length > 0){
                res.json(universitydata)
            } else{

                res.json("something went wrong");
            }
    }
    addUniv();
})

function add_university(data){
    console.log(data);
    return new Promise(function (resolve , reject){
        let sql = `insert into university set ?` ;
        let temp = {
            univ_short_name : data.univ_shortName,
            univ_full_name : data.univ_fullName
        }
        db.query(sql , temp , function (err , result){
            if(err){
                console.log(err);
            } else {
                resolve("success");
            }
        })
    })
}


app.get('/api/getUniversity' , (req , res) =>{
    async function getUniv(){
            let univData = await getUniveristydata(req.body);
            if(univData.length > 0){
                res.json(univData);
            } else{
                res.json("something went wrong");
            }
    }
    getUniv();
})

function getUniveristydata(data)
{
    return new Promise (function (resolve , reject){
        let sql = 'select * from university';
        db.query(sql , function (err , result){
            if(err){
                console.log(err);
            } else{
                resolve(result);
            }
        })
    })
}

app.post('/api/deleteSchool' , (req , res)=>{
    console.log('first body',req.body);
    async function delSchool(){
            let delschooldata = await deleteSchool(req.body);
            if(delschooldata.length > 0){
                res.json(delschooldata)
            } else{
                res.json("something went wrong");
            }
    }
    delSchool();
} )

function deleteSchool(data){
    console.log('hiiiiiiiii' , data.id);
    return new Promise(function (resolve , reject){
        let sql = `delete from school where id="${data.id}"` ;
        db.query(sql , function (err , result){
            if(err){
                console.log(err);
            } else{
                resolve("success");
            }
        })
    })
}


app.post('/api/updateSchool' , (req , res)=>{
    console.log("first log" , req.body);
    async function updateSchool(){
            let updateschooldata = await update_School(req.body);
            if(updateschooldata.length>0){
                res.json(updateschooldata);
            } else{
                res.json("something went wrong");
            }
    }
    updateSchool();
})
function update_School(data){
    return new Promise(function (resolve , reject){
        let sql = `update school set school_name = "${data.school_name}",  city = "${data.city_name}" where id = "${data.school_id}"`;
        db.query(sql , function(err , result){
            if(err){
                console.log(err);
            } else{
                resolve("success")
            }
        })

    })
}

//GET ALL SCHOOL LIST 
app.get('/api/getSchoolList' , (req,res)=>{
    let sql = `select id,school_name from school` ; 
    db.query(sql , function (err , result){
        console.log('1222525252525582858289',result);
        if(err){
            console.log(err);
        } else{
            res.json(result);
        }
    })
})

//GET ALL CLASS LIST 
app.get('/api/getClassList' , (req,res)=>{
    let sql = `select id,class_fullName,class_shortName from class` ; 
    db.query(sql , function (err , result){
        console.log('1222525252525582858289',result);
        if(err){
            console.log(err);
        } else{
            res.json(result);
        }
    })
})

//GET ALL UNIVERSITY LIST 
app.get('/api/getUniversityList' , (req,res)=>{
    let sql = `select id,univ_full_name,univ_short_name from university` ; 
    db.query(sql , function (err , result){
        console.log(result);
        if(err){
            console.log(err);
        } else{
            res.json(result);
        }
    })
})


app.post('/api/addStudent', (req , res)=>{
    async function addStudent(){
        let classResponse = await get_class(req.body.student_class_id);
        let schoolResponse = await get_school(req.body.student_school_id);
        let universityResponse = await get_university(req.body.student_university_id);
        let addStudentRes =  await add_student(req.body  , classResponse  , schoolResponse  ,  universityResponse );
        if(addStudentRes.length > 0){
            res.json(addStudentRes);
        } else{
            res.json("something went wrong")
        }
    }
    addStudent();
})

function  get_class(classId){
    return new Promise(function (resolve , reject){
        let sql = `select class_shortName from class where id = ${classId}` ; 
        db.query(sql , function(err, result){
            if(err){
             console.log(err)
            } else{
                resolve(result);
            }
        })
    })
}


function get_school(schoolId){
 return new Promise(function (resolve , reject){
    let sql2 = `select school_name from school where id = ${schoolId}` ; 
    db.query(sql2 , function(err, result){
        if(err){
         console.log(err)
        } else{
            resolve(result);
        }
    })
    })
}


function get_university(universityId){
    return new Promise(function (resolve , reject){
        let sql3 = `select univ_full_name from university where id = ${universityId}` ; 
        db.query(sql3 , function(err, result){
            if(err){
             console.log(err)
            } else{
              resolve(result);
            }
        })
    })
}

function add_student(alldata , classData , schoolData  , universityData){
    return new Promise(function (resolve , reject){
        let sql = `insert into student set ?`;
        let data = {
            student_name :  alldata.student_name,
            student_f_name : alldata.student_f_name,
            student_m_name  : alldata.student_m_name,
            student_city  :  alldata.student_city,
            student_admissiontype : alldata.student_admissionType,
            student_mob : alldata.student_mob,

            student_class : classData[0].class_shortName,
            student_school : schoolData[0].school_name,
            student_university : universityData[0].univ_full_name
        }
        db.query(sql , data , function(err , result){
            if(err){
                console.log(err)
            } else{
                resolve("success");
            }
        })
    })   
}

app.get('/api/getAllStudents' , (req,res)=>{
    let sql = `select * from student` ;
    db.query(sql , function(err,result){
        if(err){
            console.log(err)
        }  else{
            if(result.length > 0){
                res.json(result);
            } else{
                res.json("spmething went wrong")
            }
        }
    })
})


module.exports=app;