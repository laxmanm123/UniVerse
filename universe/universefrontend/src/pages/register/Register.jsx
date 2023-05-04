import "./register.css"

export default function Register() {
    return (
        <div className="rlogin">
            <div className="rloginWrapper">
                <div className="rloginLeft">
                    <h3 className="rloginLogo">UniVerse</h3>
                    <span className="rloginDesc"> Join the ultimate campus community and never miss out on the fun with UniVerse</span>
                </div>
                <div className="rloginRight">
                    <div className="box">
                        <div className="rloginBox">
                            <div className="left">
                                <span className="rinputBox"><input placeholder="Username" className="rloginInput" /></span>
                               
                                <span className="rinputBox"><input placeholder="Email" className="rloginInput" /></span>
                                <span className="rinputBox"><input placeholder="Password" className="rloginInput" /></span>
                                <span className="rinputBox"><input placeholder="Password Again" className="rloginInput" /></span>
                            </div>
                            <div className="right">
                                <span className="rinputBox">
                                    {/* <label for="pronouns">Pronouns: </label> */}
                                    <select name="pronouns" className="rloginInput"id="pronouns">
                                        <option value="" disabled selected>Pronouns</option>
                                        <option value="she-her">She/Her</option>
                                        <option value="he-him">He/Him</option>
                                        <option value="they-them">They/Them</option>
                                        <option value="she-they">She/They</option>
                                        <option value="he-they">He/They</option>
                                        <option value="any">Any</option>
                                        <option value="other">Other (specify in bio)</option>
                                    </select>
                                </span>
                               
                                <span className="rinputBox"><input type="number" placeholder="Age" className="rloginInput" /></span>
                                <span className="rinputBox"><input placeholder="Major" className="rloginInput" /></span>
                                <span className="rinputBox"><input placeholder="Res Cluster" className="rloginInput" /></span>
                                <span className="rinputBox"><textarea className="rloginInput" rows = "2" cols = "20" name = "description" placeholder="Bio" maxlength="100">
                                </textarea></span>
                            </div>
                            {/* Add fields to register: pronouns (dropdown), Age (number field), Major (can input several), Res cluster (dropdown), bio (limit # of characters)*/}
                           
                           
                            {/* <span className="rinputBox"><button className="rloginRegisterButton">
                                Log into Account
                            </button></span> */}
                        </div>
                        <div>
                            <span className="rinputBox"><button className="rloginButton">Sign Up</button></span>
                        </div>
                       
                    </div>
                   
                   
                </div>
            </div>
        </div>
    )
}