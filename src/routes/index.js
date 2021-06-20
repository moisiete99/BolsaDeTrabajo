const { Router } = require('express');
const router = Router();
const db = require("../databases");

router.get('/', (req, res) => {
    res.send('Hello World Nurse');
});

router.post('/signup', async (req, res) => {
    const { name, email, password, tipo } = req.body;
    const cuenta = { Correo: email, Contraseña: password, Tipo: tipo, Validado: "F" }
    const re = await db.query("insert into cuentas set ?", [cuenta]);

    id = re.insertId;

    if(tipo == "A"){
        const aspirante = {idCorreo:id, Nombre:name, Apellidos:"", Edad:"",Pais:"",Estado:"",Municipio:"",Direccion:"",AcercaDe:"",Descripcion:"",Habilidades:"",Foto:""}
        const re2 = await db.query("insert into aspirantes set ?", [aspirante]);
    }
    else if(tipo == "E"){
        const empresa = {idCorreo:id, Nombre:name, Pais:"", Estado:"", Municipio:"", Direccion:"", Descripcion:"", Foto:""}
        const re2 = await db.query("insert into empresas set ?", [empresa])
    }

    res.json({id:re.insertId});
    
    /* Original
    const { name, email, password, tipo } = req.body;
    const cuenta = { Correo: email, Contraseña: password, Tipo: tipo, Validado: name }
    const re = await db.query("insert into cuentas set ?", [cuenta]);

    id = re.insertId;

    if(tipo == "A"){
        const aspirante = {idCorreo:id, Nombre:"", Apellidos:"", Edad:"",Pais:"",Estado:"",Municipio:"",Direccion:"",AcercaDe:"",Descripcion:"",Habilidades:"",Foto:""}
        const re2 = await db.query("insert into aspirantes set ?", [aspirante]);
    }
    else if(tipo == "E"){
        
    }

    res.json({id:re.insertId}); */
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const re = await db.query("select * from cuentas where Correo = ?", [email]);
    if (re[0]) {
        if (re[0].Contraseña == password) {
            res.json({ permiso: true, id:re[0].ID })
        } else {
            res.json({ permiso: false })
        }
    } else {
        res.json({ msg: "No existe", permiso: false });
    }

    /* Original
    const { email, password } = req.body;
    const re = await db.query("select * from cuentas where Correo = ?", [email]);
    if (re[0]) {
        if (re[0].Contraseña == password) {
            res.json({ permiso: true })
        } else {
            res.json({ permiso: false })
        }
    } else {
        res.json({ msg: "No existe", permiso: false });
    } */
});

router.get('/aspirantes', async(req, res) => {
    const re = await db.query("select * from aspirantes");
    res.json(re)

    /* Original
    const re = await db.query("select * from aspirantes");
    res.json(re) */
})
router.post('/aspirante', async(req, res) => {
    const { id } = req.body;
    const re = await db.query("select * from aspirantes where ID = ?", [id])

    console.log(re)

    res.json(re)
})

/* router.get('aspirante', async(req, res) => {
    const {id} = req.body;
    const re = await db.query("select * from aspirantes = ?", [id]);
    res.json(re)
}) */

router.get('/empresas', async(req, res) => {
    const re = await db.query("select * from empresas")
    res.json(re)
})

router.post('/empresa', async(req, res) => {
    const { id } = req.body
    const re = await db.query("select * from empresas where ID = ?", [id])

    res.json(re)
})

router.get('/trabajos', async(req, res) => {
    const re = await db.query("select * from trabajos")
    res.json(re)
})

router.post('/trabajo', async(req, res) => {
    const { id } = req.body
    const re = await db.query("select * from trabajos where ID = ?", [id])

    res.json(re)
})

router.post('/verify', async(req, res) => {
    const {email, password } = req.body;
    const re = await db.query("select * from cuentas where Correo = ?", [email]);
    if(re[0]){
        if(re[0].Tipo == "A"){
            res.json({ tipo: "A" })
        }
        else if(re[0].Tipo == "E"){
            res.json({ tipo: "E" })
        }
    }
})

router.post('/registerA', async(req, res) => {
    const {id,apellidos,edad,pais,estado,municipio,direccion,acercade,descripcion,habilidades,foto} = req.body;
    //const aspirante = {ID:"",idCorreo:id,Apellidos:apellidos,Edad:edad,Pais:pais,Estado:estado,Municipio:municipio,Direccion:direccion,AcercaDe:acercade,Descripcion:descripcion,Habilidades:"",Foto:""}
    const re = await db.query("update aspirantes set apellidos=?,edad=?,pais=?,estado=?,municipio=?,direccion=?,acercade=?,descripcion=?,habilidades=?,foto=? where idCorreo = ? ", [apellidos,edad,pais,estado,municipio,direccion,acercade,descripcion,habilidades,foto,id]);

    res.json({id:re.insertId});
})

router.post('/registerE', async(req, res) => {
    const {id,pais,estado,municipio,direccion,descripcion,foto} = req.body;

    const re = await db.query("update empresas set pais=?,estado=?,municipio=?,direccion=?,descripcion=?,foto=? where idCorreo = ?", [pais,estado,municipio,direccion,descripcion,foto,id])

    res.json({id:re.insertId});
})

router.post('/registerT', async(req, res) => {
    const {id,descripcion,habilidadesN,horarios,idAspirantes} = req.body;
    const re = await db.query("select * from empresas where idCorreo = ?", [id]);
    if(re[0]){
        idAux = re[0].ID
    }
    
    const trabajo = {idEmpresa:idAux, Descripcion:descripcion, HabilidadesN:habilidadesN,Horarios:horarios,idAspirantes:idAspirantes};
    const re2 = await db.query("insert into trabajos set ?", [trabajo]);

    res.json({id:re2.insertId})
    
    /* const re3 = await db.query("select * from trabajos where ID = ?", [re2.insertId])
    if(re3[0]){
        console.log(re3[0].idAspirantes)
    } */
    
})

router.post('/getTC', async(req, res) => {
    const {id,descripcion,habilidadesN,horarios,idAspirantes} = req.body;

    const re = await db.query("select * from aspirantes where ID = ?", [idAspirantes])
    if(re[0]){
        idAux = { id:re[0].idCorreo }
        console.log(idAux)
    }

    const re2 = await db.query("select * from cuentas where ID = ?", [idAux])
    console.log(re2)
    if(re2[0]){
        console.log(re2[0].Correo)
        res.json({ email:re2[0].Correo })
    }
})

router.post('/verifyH', async(req, res) => {
    const {email} = req.body;
    const re = await db.query("select * from cuentas where Correo = ?", [email]);
    if(re[0]){
        if(re[0].Tipo == "A"){
            res.json({ tipo: "A" });
        }
        else if(re[0].Tipo == "E"){
            res.json({ tipo: "E" });
        }
    }
})

module.exports = router;