<?php

function debug_log(...$objects)
{
    foreach ($objects as $object) {
        $log = print_r($object, true).PHP_EOL;
        file_put_contents('../log.txt', $log, FILE_APPEND);
    }
}
