const img_array=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg']
const array_length=img_array.length
let i=0
let set=setInterval(slider,3000)

function slider()
{
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${img_array[i]}`
}

function next()
{
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${img_array[i]}`
}

function prev()
{
    i--
    if(i<0)
    {
        i=array_length-1
    }
    document.getElementById('image').src=`images/${img_array[i]}`
}