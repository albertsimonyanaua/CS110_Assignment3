let grade = 89;
let letterGrade;

if(grade < 60){
     letterGrade = "F";
}else if(grade >= 60 && grade <= 62){
     letterGrade = "D-";
}else if(grade >= 63 && grade <= 66){
     letterGrade = "D";
}else if(grade >= 67 && grade <= 69){
     letterGrade = "D+";
}else if(grade >= 70 && grade <= 72){
     letterGrade = "C-";
}else if(grade >= 73 && grade <= 76){
     letterGrade = "C";
}else if(grade >= 77 && grade <= 79){
     letterGrade = "C+";
}else if(grade >= 80 && grade <= 82){
     letterGrade = "B-";
}else if(grade >= 83 && grade <= 86){
     letterGrade = "B";
}else if(grade >= 87 && grade <= 89){
     letterGrade = "B+";
}else if(grade >= 90 && grade <= 92){
     letterGrade = "A-";
}else if(grade >= 93 && grade <= 96){
     letterGrade = "A";
}else if(grade >= 97 && grade <= 10){
     letterGrade = "A+";
}

let FinalGrade = letterGrade;
switch(FinalGrade){
     case "F":
          console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
          break;
          case "D-":
               console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
               break;
               case "D":
                    console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
                    break;
                    case "D+":
                         console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
                         break;
                         case "C-":
                              console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
                              break;
                              case "C":
                                   console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
                                   break;
                                   case "C+":
                                        console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
                                        break;
                                        case "B-":
                                             console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
                                             break;
                                             case "B":
                                                  console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
                                                  break;
                                                  case "B+":
                                                       console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
                                                       break;
                                                       case "A-":
                                                            console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
                                                            break;
                                                            case "A":
                                                                 console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
                                                                 break;
                                                                 case "A+":
                                                                      console.log(`Your Grade Is ${grade} which corresponds to ${letterGrade}`);
                                                                      break;
                                                                                                                                                                                                                                                                                 
}