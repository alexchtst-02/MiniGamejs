function SolveLinear(var_x1, var_x2, var_y1, var_y2, r1, r2)
{
    var det = var_x1*var_y2 - var_x2*var_y1;
    var B2 = var_x1*r2 - var_x2*r1;
    var B1 = r1*var_y2 - r2*var_y1;
    const solution = [];
    if(det != 0){
        B1 = B1/det;
        B2 = B2/det;
        solution[0] = B1;
        solution[1] = B2;
    }
    else{
        solution.push[0], solution[1] = null;
    }
    return(solution);
}

function ThreeCircleMethod(circle1, circle2, circle3)
{
    var a1, a2, a3, b1, b2, b3, r1, r2, r3;

    a1 = circle1[0];
    a2 = circle2[0];
    a3 = circle3[0];

    b1 = circle1[1];
    b2 = circle2[1];
    b3 = circle3[1];
    
    r1 = circle1[2];
    r2 = circle2[2];
    r3 = circle3[2];

    var var_r1 = (a1**2 + b1**2 - a2**2 - b2**2) - (r1**2 - r2**2);
    var var_r2 = (a1**2 + b1**2 - a3**2 - b3**2) - (r1**2 - r3**2);
    var var_a1 = 2*(a1 - a2);
    var var_a2 = 2*(a1 - a3);
    var var_b1 = 2*(b1 - b2);
    var var_b2 = 2*(b1 - b3);

    const postition = SolveLinear(var_a1, var_a2, var_b1, var_b2, var_r1, var_r2);

    return(postition);
    
}

/* 
menemukan lokasi koordinat dengan menggunakan 3 lingkaran
jika sebuah titik merupakan sebuah titik yang berada pada lingkaran 
circle1, circle2, dan circle3 maka dapat ditentukan titik tersebut lokasi
koordinatnya dengan menggunakan jari jari lingkaran, dan pusat ketiga
ligkaran tersebut

fungsi solve linear adalah fungsi yang meminta input a1, b1, r1, a2, b2, r2
yang merupakan koefisien dari persamaan linear 2 variable
a1x + b1y = r1
a2x + b2y = r2
dan akan mengembalikan output berupa array yang merupakan solusi [x, y]
jika determinan = 0 maka akan mengembalikan nilai array = [null]

fungsi ThreeCircleMethod adalah fungsi yang meminta input list dari [xp, yp, r]
dari 3 lingkaran berbeda
dan akan mengembalikan nilai berupa array [x, y] yang merupakan titik yang berada
pada ketiga lingkaran tersbut

*/