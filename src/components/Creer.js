import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


const Creer = ({onAdd, onModifier, listes}) => {
    const [nom, setNom] = useState('')
    const [prix, setPrix] = useState('')
    const [description, setDescription] = useState('')
    const [catégorie, setCategorie] = useState('')
    const [thumbnail, setThumbnail] = useState('https://i.dummyjson.com/data/products/5/2.jpg')

    let {id} = useParams();

    const navigator = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        if(!nom){
            alert('Ajouter un nom')
            return
        }
        if(id){
            onModifier({ id, nom, prix, description, catégorie,thumbnail })
        }else{
            id= Math.floor(Math.random()*1000)+11;
            onAdd({id, nom, prix, description, catégorie,thumbnail })
        }

       
        setNom('')
        setPrix('')
        setDescription('')
        setCategorie('')
        setThumbnail('https://i.dummyjson.com/data/products/5/2.jpg')

        navigator("/produits");
    }

    useEffect(()=>{
        if (id) {
            const {nom, prix, description, catégorie} = listes.find(item =>item.id == id)
            setNom(nom)
            setPrix(prix)
            setDescription(description)
            setCategorie(catégorie)
        }
      
    },[])

    return(
        <div class="row justify-content-center" style={{ marginTop: '6.5rem' }}>
             <div class="col-6">
                <div class="card">
                    <form onSubmit={onSubmit}>
                        <div class="card-header bg-info p-4 text-center ">
                        <h4>Formulaire</h4> 
                        </div>
                        <div class="card-body">
                            <label>Nom</label>
                            <input 
                            type="text" 
                            placeholder="Ajouter nom" 
                            value={nom} 
                            onChange = { (e) => setNom(e.target.value)} 
                            class="form-control"/>
                    
                            <label>Prix</label>
                            <input 
                            type="number" 
                            placeholder="Ajouter prix" 
                            value={prix} 
                            onChange = { (e) => setPrix(e.target.value)} 
                            class="form-control"/>

                            <label>Catégorie</label>
                            <input 
                            type="text" 
                            placeholder="Ajouter catégorie" 
                            value={catégorie} 
                            onChange = { (e) => setCategorie(e.target.value)} 
                            class="form-control"/>

                            <label>Description</label>
                            <textarea type="text" 
                            placeholder="Ajouter description" 
                            value={description} 
                            onChange = { (e) => setDescription(e.target.value)} 
                            class="form-control">
                            </textarea>
                        </div>
                        <div class="card-footer text-center">
                            <input type="submit" class="btn btn-success" value="Save Produit"/>
                        </div>
                    </form> 
                </div>
                <button type="button" className="btn btn-primary mt-4 " style={{ marginBottom: '6.5rem' }}><Link to="/produits" className="text-white text-decoration-none">Rotourne</Link></button>
            </div>           
        </div>    
    );
}

export default Creer 