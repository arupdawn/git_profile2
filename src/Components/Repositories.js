import React from "react";

const Repositories = (props) => (
    
    <div className="RepoContent">
        <nav className="RepoContent navbar navbar-light bg-light">
            
            
            <div className="Navig" id="navbarNav">
                
                    <a className="link" href="#">Overview <span className="sr-only">(current)</span></a>
                    <a className="link" href="#">Repositories
                    {' '}<span className="dot">{props.repos.length}</span>
                    </a>
                    <a className="link" href="#">Stars</a>
                    <a className="link disabled" href="#">Followers
                    {' '}<span className="dot">{props.follower_user.length}</span>
                    </a>
                    <a className="link disabled" href="#">Following
                    {' '}<span className="dot">{props.following_user.length}</span>
                    </a>
               
            </div>

            
        </nav>


        
        <form className="form-inline" onSubmit={props.change} >
        
            <div className="Search">
            <input  className="form-control mr-sm-2" type="search" placeholder="Find repository.." aria-label="Search"
             name="RepoName" onChange={props.change} value={props.value}/>
            </div>

            <select id="ddlType" onChange={props.getSelectValue} className="form-control ddl">
                <option  value="all">Type: All</option>
                <option  value="source">Type: Source</option>
                <option  value="forks">Type: Forks</option>
                <option  value="archived">Type: Archived</option>
                <option  value="mirrors">Type: Mirrors</option>
            </select>

            <select id="ddlLang" onChange={props.getSelectLangValue} className="form-control ddl">
                <option  value="all">Language: All</option>
                <option  value="HTML">Language: HTML</option>
                <option  value="Javascript">Language: Javascript</option>
                <option  value="CSS">Language: CSS</option>
            </select>
            
            <button type="button" className="btn btn-success">New</button>
  
        </form>
        <hr></hr>



        {
            props.repos.map((repo)=>{
            if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&(props.ddlType === "all")&&(props.dllLang === "all")){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "forks")&&(repo.fork == true))&&(props.dllLang === "all")){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "forks")&&(repo.fork == true))&&((props.dllLang === "HTML")&&(repo.language === 'HTML'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "forks")&&(repo.fork == true))&&((props.dllLang === "Javascript")&&(repo.language === 'JavaScript'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "forks")&&(repo.fork == true))&&((props.dllLang === "CSS")&&(repo.language === 'CSS'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "source")&&(repo.fork == false))&&(props.dllLang === "all")){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "source")&&(repo.fork == false))&&((props.dllLang === "HTML")&&(repo.language === 'HTML'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "source")&&(repo.fork == false))&&((props.dllLang === "Javascript")&&(repo.language === 'JavaScript'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "source")&&(repo.fork == false))&&((props.dllLang === "CSS")&&(repo.language === 'CSS'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }
            

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "archived")&&(repo.archived == true))&&(props.dllLang === "all")){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "archived")&&(repo.archived == true))&&((props.dllLang === "CSS")&&(repo.language === 'CSS'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "archived")&&(repo.archived == true))&&((props.dllLang === "HTML")&&(repo.language === 'HTML'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "archived")&&(repo.archived == true))&&((props.dllLang === "Javascript")&&(repo.language === 'JavaScript'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "mirrors")&&(repo.mirror_url !== null))&&(props.dllLang === "all")){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "mirrors")&&(repo.mirror_url !== null))&&((props.dllLang === "Javascript")&&(repo.language === 'JavaScript'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "mirrors")&&(repo.mirror_url !== null))&&((props.dllLang === "HTML")&&(repo.language === 'HTML'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&((props.ddlType === "mirrors")&&(repo.mirror_url !== null))&&((props.dllLang === "CSS")&&(repo.language === 'CSS'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&(props.ddlType === "all")&&((props.dllLang === "HTML")&&(repo.language === 'HTML'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&(props.ddlType === "all")&&((props.dllLang === "Javascript")&&(repo.language === 'JavaScript'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            else if(((props.value == '')||((props.value.toLowerCase() == repo.name.toLowerCase())))&&(props.ddlType === "all")&&((props.dllLang === "CSS")&&(repo.language === 'CSS'))){
                return(
                    <div key={repo.id} className="RepoMain">
                        <h2 className="RepoName"><strong>{repo.name}</strong></h2>
                        
                        <p>{repo.description}</p>
                        <p className="Lang">{repo.language} </p> 
                        <p className="UpdatedOn">Updated on: {repo.updated_at}</p>
                        <hr></hr>
                    </div>
                )
            }

            
            })
        }
    </div>
);


export default Repositories;