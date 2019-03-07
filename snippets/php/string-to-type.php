<?php

function string_to_type(string $string) {
    if ((string) floatval($string) === $string) {
        if (strpos($string, '.') !== false) {
            return (float) $string;
        }
        
        return (int) $string;
    }
    
    if ($string === 'true' || $string === 'false') {
        return filter_var($string, FILTER_VALIDATE_BOOLEAN);
    }
    
    if ($string === 'null') {
        return null;
    }
    
    return $string;
}
