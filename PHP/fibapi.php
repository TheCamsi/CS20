<?php
// Check if the number parameter is provided
if(isset($_GET['number'])){
    // Read the number from GET data
    $number = intval($_GET['number']);
    
    // Function to generate Fibonacci sequence
    function fibonacci($n) {
        $fib = array();
        $fib[0] = 0;
        $fib[1] = 1;
        for ($i = 2; $i < $n; $i++) {
            $fib[$i] = $fib[$i-1] + $fib[$i-2];
        }
        return $fib;
    }
    
    // Generate Fibonacci sequence
    $fibonacciSequence = fibonacci($number);
    
    $response = array(
        'data' => $fibonacciSequence
    );
    
    // Convert response to JSON format
    $jsonResponse = json_encode($response);
    
    // Output JSON response
    echo $jsonResponse;
} else {
    // Invalid or missing parameter
    $errorResponse = array(
        'error' => 'Invalid or missing number parameter'
    );
    echo json_encode($errorResponse);
}
?>