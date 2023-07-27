function check()
                {
                    let count=0;
                    let spel=0;
                    document.getElementById("pop").innerHTML="";
                    document.getElementById("res").innerHTML="";
                    let d=document.getElementById("psw").value;
                    let v=d.split("");
                    let n=document.getElementById("us").value;
                    let b=n.split("");
                    console.log(b);
                    for(let i=0;i<n.length;i++)
                    {
                        if(b[i]==' ')
                        {
                            document.getElementById("pop").innerHTML="*no spaces allowed";
                            
                            
                        }
                        
                    }
                    for(let j=0;j<d.length;j++)
                    {
                        
                        
                        
                        if(v[j]==' ')
                        {
                            document.getElementById("res").innerHTML="*no spaces allowed";
                            
                            
                        }
                        if(v[j]=='@'||v[j]=='#'||v[j]==' $'||v[j]==' %'||v[j]==' &'||v[j]==' *'||v[j]==' ^'||v[j]=='!')
                        {
                            count++;
                        }
                    }
                    const hasUppercase = /[A-Z]/.test(d);
                    if(!hasUppercase)
                    {
                        document.getElementById("res").innerHTML="*min one uppercase letter is required";

                    }
                    if(count<1)
                    {
                        document.getElementById("res").innerHTML="*alteast one cahr @,#,$,%,^,&,*,! is required";

                    }
                    if(d.length<=8)
                    {
                        document.getElementById("res").innerHTML="*min 8 chars required";
                    }
                }
                