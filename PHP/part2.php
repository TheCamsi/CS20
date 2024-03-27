<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Part 2</title>
    <style>
        .office-hours {
            width: 500px;
            height: 700px;
            line-height: 2;
            font-family: 'consolas';
            background-color: rgb(152, 222, 249);
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="office-hours">
        <h1 id="title">Office Hours</h1>
        <?php 
            $officeHours = array(
                "Sunday" => "N/A",
                "Monday" => "2pm - 4pm",
                "Tuesday" => "3pm - 7pm",
                "Wednesday" => "12pm - 7pm",
                "Thursday" => "2pm - 4pm",
                "Friday" => "3pm - 7pm",
                "Saturday" => "12pm - 2pm"
            );
            foreach($officeHours as $day => $time) {
                echo $day . " - " . $time . "<br>";
            }
        ?>
    </div>
</body>
</html>